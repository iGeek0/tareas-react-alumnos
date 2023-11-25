import { useState, useEffect } from "react";
import axios from 'axios';

import Loading from '../components/Loading';
import { Link } from "react-router-dom";

function Listado() {

    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true);

    const headers = {
        'Authorization': '9faa4f2eed9b6c5f9a748d54ed32cc90'
    }

    const getTareas = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://dev4humans.com.mx/api/clases/tareas?usuario=jesusc`, { headers });
            setTareas(response.data.data);
            console.log(response);
        } catch (error) {
            console.log("Error en carga de informacion", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        console.log("Entro a useEffect aqui deberia cargar mis tareas");
        getTareas();
    }, []);

    const eliminarTarea = async (id) => {
        console.log("El id que quieres eliminar es " + id);
        try {
            await axios.delete(`https://dev4humans.com.mx/api/clases/tareas?usuario=jesusc&id=${id}`, {headers});
            await getTareas();
        } catch (error) {
            console.log("Error en carga de informacion", error);
        }
    }

    // fomatear fecha con date-fn

    if (loading) {
        return (<Loading />)
    }

    return (
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Tarea</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tareas.map((tarea, index) => (
                            <tr key={index}>
                                <td>{tarea.id}</td>
                                <td>{tarea.fecha_registros}</td>
                                <td>{tarea.tarea}</td>
                                <td className="text-center">
                                    <Link className="btn btn-primary me-2"
                                        to={`/editar/${tarea.id}`}>Editar</Link>
                                    <button type="button" className="btn btn-danger"
                                    onClick={()=>eliminarTarea(tarea.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    {
                        tareas.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center">
                                    No hay tareas
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Listado;