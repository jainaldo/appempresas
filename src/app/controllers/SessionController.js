import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import Portfolio from '../models/Portfolio';
import Enterprise from '../models/Enterprise';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        success: false,
        error: ['Invalid login credentials. Please try again.'],
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Portfolio,
          as: 'portfolio',
          attributes: ['enterprises_number'],
          include: {
            model: Enterprise,
            as: 'enterprises',
          },
        },
      ],
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const {
      id,
      investor_name,
      city,
      country,
      balance,
      photo,
      portfolio_value,
      first_access,
      super_angel,
      portfolio,
    } = user;

    return res.json({
      investor: {
        id,
        investor_name,
        email,
        city,
        country,
        balance: Number(balance),
        photo,
        portfolio_value: Number(portfolio_value),
        first_access,
        super_angel,
        portfolio,
      },
      enterprise: null,
      success: true,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
