const customerModal = require("../Modal/customerModal");

const customerController = {
  addCustomer: async (req, res) => {
    const { Image } =
      req.body;
    try {
      const addCustomer = await customerModal.create({
        Image
      });
      res.status(200).json({ message: "Thêm thành công", data: addCustomer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  patchCustomer: async (req, res) => {
    const { Image , customerId} =
      req.body;
    try {
      const updateCustomer = await customerModal.updateOne( {_id: customerId} , {
        Image
      });
      res.status(200).json({ message: "Cập nhật thành công", data: updateCustomer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delCustomer: async (req, res) => {
    try {
      const delCustomer = await customerModal.deleteOne( {_id: req.params.customerId} );
      res.status(200).json({ message: "Xóa thành công", data: delCustomer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCustomer: async (req, res) => {
    try {
      const dataCustomer = await customerModal.find( );
      res.status(200).json({ message: "hành công", data: dataCustomer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = customerController;
