import { Op, fn, col, where } from 'sequelize';
import Enterprise from '../models/Enterprise';
import EnterpriseType from '../models/EnterpriseType';

class EnterpriseController {
  async index(req, res) {
    const { enterprise_types, name } = req.query;
    const filter = {};

    if (enterprise_types) {
      filter.type_id = enterprise_types;
    }

    if (name) {
      filter.name = where(fn('lower', col('enterprise_name')), {
        [Op.like]: `%${name.toLowerCase()}%`,
      });
    }

    const enterprisesAll = await Enterprise.findAll({
      where: filter,
      attributes: [
        'id',
        'enterprise_name',
        'description',
        'email_enterprise',
        'facebook',
        'twitter',
        'linkedin',
        'phone',
        'own_enterprise',
        'photo',
        'value',
        'shares',
        'share_price',
        'own_shares',
        'city',
        'country',
      ],
      include: [
        {
          model: EnterpriseType,
          as: 'enterprise_type',
          attributes: ['id', 'enterprise_type_name'],
        },
      ],
    });

    return res.json({ enterprises: enterprisesAll });
  }

  async show(req, res) {
    const { id } = req.params;

    const enterpriseFound = await Enterprise.findByPk(id, {
      attributes: [
        'id',
        'enterprise_name',
        'description',
        'email_enterprise',
        'facebook',
        'twitter',
        'linkedin',
        'phone',
        'own_enterprise',
        'photo',
        'value',
        'shares',
        'share_price',
        'own_shares',
        'city',
        'country',
      ],
      include: [
        {
          model: EnterpriseType,
          as: 'enterprise_type',
          attributes: ['id', 'enterprise_type_name'],
        },
      ],
    });

    if (!enterpriseFound) {
      return res.status(404).json({ error: 'Not Found', status: '404' });
    }
    const enterprise = {
      enterprise: enterpriseFound,
      success: true,
    };

    return res.json(enterprise);
  }
}

export default new EnterpriseController();
