import React from 'react'
import MUIDataTable from "mui-datatables";
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import { useSelector } from 'react-redux';

export const Reporte = () => {


    const { seleccionAuditoriaReview, audit, auditSection, auditPoints } = useSelector(state => state.audi)
    // const { audit, auditSection, auditPoints, reviews } = useSelector(state => state.audi)

    const { name,id } = seleccionAuditoriaReview[0]
    
    const session = auditSection.filter(i => i.auditID === id)

    const preguntas = session.map(i => (
        [i.name, auditPoints.filter(j => j.auditSectionID == i.id)]
    ))

    console.log({session});
    console.log({preguntas});

    const columns = [
        {
            name: "compania",
            label: "Sesión",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Pregunta",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "performedBy",
            label: "Respuesta",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "performedBy",
            label: "Comentario",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];


    const data2 = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    ];

    const options = {
        filterType: 'checkbox',
        selectableRows: 'none',
        selectableRowsOnClick: true
    };







    return (
        <>
            <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
                <Card>
                    <CardHeader color="blueGray" contentPosition="left">
                        <h2 className="text-white text-2xl uppercase ">Plantilla resuelta: 
                        <br /><p className='ml-10' >{`${name}`}</p>
                       </h2>
                    </CardHeader>
                    <CardBody>

                        <MUIDataTable
                            title={"Resultado de la auditoría"}
                            data={data2}
                            columns={columns}
                            options={options}
                        />


                    </CardBody>
                </Card>
            </div>
        </>
    )
}
