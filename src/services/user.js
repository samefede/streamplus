const BASE_URL = 'http://localhost:8080/streamplus/user/';
//BUSCAR EN IPCONFIG LA IPV4 Y REEMPLAZARLA POR localhost
const createUser = async ({ userName, password, mail }) => {
	try {
		const request = { userName: userName, password: password, mail: mail }
		const response = await fetch(`${BASE_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(request),
		});
		if (response.ok) {
			return await response.json();
		}
		throw new Error('Error al registrar usuario');
	} catch (error) {
		throw error;
	}
};

const loginUser = async ({ userName, password }) => {
	try {
		const response = await fetch(`${BASE_URL}login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userName, password }),
		});
		if (response.ok) {
			return await response.json();
		}
		throw new Error('Error al iniciar sesión');
	} catch (error) {
		throw error;
	}
};

export default {
	createUser,
	loginUser,
}