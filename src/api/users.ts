import api from "./main";

export async function getById(id: string) {
    try {
      const response = await api.get('/users/' + id);
      return response;
    } catch (error) {
      console.error(error);
    }
}

export async function getAll() {
    try {
      const response = await api.get('/users');
      return response;
    } catch (error) {
      console.error(error);
    }
}

export async function update({id, name, birthdate, image, sex, address, phone, occupation} : { id: string, name: string, birthdate: string, image: string, sex: string, address: string, phone: string, occupation: string}) {
    try {
      const response = await api.put('/users/' + id, {
        name: name,
        birthdate: birthdate,
        image: image,
        sex: sex,
        address: address,
        phone: phone,
        occupation: occupation
      });
      return response;
    } catch (error) {
      console.error(error);
    }
}

export async function deleteUser({id} : {id: string}) {
    try {
      const response = await api.delete('/users/' + id);
      return response;
    } catch (error) {
      console.error(error);
    }
}