class RepositoryBase {
    constructor(modelo) {
        this.modelo = modelo;
    }

    findAll = async () => {
        try {
            const result = await this.modelo.findAll();
            return result;
        } catch(err) {
            console.error(err);
            return null;
        }
        
    }

    create = async (object) => {
        try {
            return await this.modelo.create(object)
        } catch(err) {
            console.error(err);
            return null;
        }
        
    }

    findOne = async (id) => {
        try {
            return await this.modelo.findOne({
                where: { id }
            })
        }
        catch(err) {
            console.error(err);
            return null;
        }
    }
    
    update = async (object) => {
        const { id } = object;
        console.log('Update Object:', object);
        try {
          const [rowsUpdated, updatedRows] = await this.modelo.update(object, { where: { id }, returning: true });
      

          if (rowsUpdated > 0 && updatedRows.length > 0) {
            return updatedRows[0]; 
          } else {
            return null; 
          }
        } catch (err) {
          console.error(err);
          return null;
        }
      };
      
      
    remove = async (id) => {
        try {
            await this.modelo.destroy({
                where: {
                    id
                }
            })
            return true;
        } catch (err) {
            console.error(err)
            return null
        }
    
    }


}

export default RepositoryBase;