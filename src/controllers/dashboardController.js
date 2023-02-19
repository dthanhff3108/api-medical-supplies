import Unit from "~/models/unitModel";
import { pickQuery } from "~/utilities/functionsHelper";
import { HttpStatusCode } from "~/utilities/statusResponse";
import Department from "~/models/DepartmentModel";
import Supplier from "~/models/supplierModel";
import Supply from "~/models/supplyModel";
const dashboardController = {
  getDashboardOverview: async (req, res) => {
    try {
      const totalDepartment = await Department.count({});
      const totalSupplier = await Supplier.count({});
      const totalSupply = await Supply.count({});
      return res.status(HttpStatusCode.OK).json({
        totalDepartment,
        totalSupplier,
        totalSupply,
      });
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json();
    }
  },
  getDataSupplyByType: async (req, res) => {
    try {
      const listSupply = await Supply.find({});
      const filterData = listSupply.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur.type)) {
          return {
            ...acc,
            [cur.type]: Number(acc[cur.type]) + 1,
          };
        } else {
          return { ...acc, [cur.type]: 1 };
        }
      }, {});
      return res.status(HttpStatusCode.OK).json(filterData);
    } catch (err) {
      return res.status(HttpStatusCode.INTERNAL_SERVER).json();
    }
  },
};

export default dashboardController;
