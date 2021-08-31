import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@material-tailwind/react/Card'
import MUIDataTable from "mui-datatables";
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import CardBody from '@material-tailwind/react/CardBody'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardTable from 'components/TableCard';
import axios from 'axios';
import audiApi from 'api/audiApi';
import { reduxSaveAudit } from 'actions/audit';
import { selectAuditReview } from 'actions/audit';
import { Reporte } from 'components/reportes/Reporte';

export const Reportes = () => {

    const { companyId, id, name, company } = useSelector(state => state.auth)

    const { seleccionAuditoriaReview } = useSelector(state => state.audi)
    // const { audit, auditSection, auditPoints, reviews } = useSelector(state => state.audi)

    console.log(seleccionAuditoriaReview[0]);


    // const review = reviews.filter(r => r.company_Id === companyId || r.user_Id === id)

    // const resueltas = review.length

    // const reportes = [{ name, company, resueltas }]

    // console.log(review.length);


    const dispatch = useDispatch()

    const { plantilla: plantillas, seleccionAuditoría } = useSelector(state => state.audi)
    // const { companyId } = useSelector(state => state.auth)

    const auditoria = plantillas.filter(plantilla => plantilla.id == seleccionAuditoría)


    const [auditObtained, setauditObtained] = useState([])
    const [auditSectionObtainedAll, setauditSectionObtainedAll] = useState([])
    const [selectSection, setSelectSection] = useState([])
    const [auditPointObtained, setauditPointObtained] = useState([])
    const [auditReviewObtained, setauditReviewObtained] = useState([])


    let sections;

    if (seleccionAuditoría) {
        sections = auditSectionObtainedAll.filter(section => section.auditID == seleccionAuditoría)
    }

    let aud = { auditObtained, sections }


    useEffect(() => {
        const source = axios.CancelToken.source()
        const getData = async () => {
            try {
                const { data: audit } = await audiApi.get("/Audit")
                const { data: AuditSection } = await audiApi.get("/AuditSection")
                const { data: AuditPoint } = await audiApi.get("/AuditPoint")
                const { data: auditReview } = await audiApi.get("/AuditReview")
                setauditObtained(audit.filter(aud => aud.companyID == companyId))
                setauditSectionObtainedAll(AuditSection)
                setauditPointObtained(AuditPoint)
                setauditReviewObtained(auditReview)
                dispatch(reduxSaveAudit(audit, AuditSection, AuditPoint))
            } catch (error) {
                if (audiApi.isCancel(error)) {

                } else {
                    throw error
                }
            }
        }
        getData()

        return () => {
            source.cancel()
        }
    }, [])

    const resueltas = auditReviewObtained.length


    // console.log(auditReviewObtained.length);

    const columns = [
        {
            name: "name",
            label: "Auditoría",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "performedBy",
            label: "Realizada",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "compania",
            label: "Compañía",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "id",
            label: "Acciones",
            options: {
                filter: true,
                sort: false,
                customBodyRenderLite: (rowsSelected) => {
                    const review = b.filter((b, index) => index == rowsSelected)
                    return (
                        <button
                            onClick={() => dispatch(selectAuditReview(review))}>
                            <PageviewOutlinedIcon fontSize='large' />
                        </button>
                    );
                }
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
        selectableRowsOnClick: true,
        onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
            console.log(b.filter((b, index) => index == rowsSelected))
        },

    };



    const review = auditReviewObtained.filter(r => r.company_Id === companyId)



    const a = review.map(a => auditObtained.filter(r => a.audit_Id == r.id))
    const b = a.map(a => (a[0]))
    b.forEach(b => b.compania = company)

    if (seleccionAuditoriaReview[0]) {
        return (
            <Reporte />
        )
    }


    return (
        <>
            <div className='xl:col-start-1 xl:col-end-6 px-4 mt-9 mb-14' >
                <Card>
                    <CardHeader color="blueGray" contentPosition="left">
                        <h2 className="text-white text-2xl uppercase ">Lorem, ipsum dolor.</h2>
                    </CardHeader>
                    <CardBody>


                        {
                            b.length === 0 ?
                                <div className="animacion flex justify-center items-center ">
                                    <img className='w-14 m-24' src="https://i.imgur.com/cWGLRFJ.png" />
                                </div>
                                :
                                <MUIDataTable
                                    title={"Auditorías realizadas"}
                                    data={b}
                                    columns={columns}
                                    options={options}
                                />
                        }





                        {/* {
                            auditObtained.length !== 0 &&
                            <div className="overflow-x-auto my-5">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Plantilla
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Creada
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Restaurante
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Creador
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Encargado
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Tipo
                                            </th>
                                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            b.map((plantilla) => (
                                                <CardTable
                                                    key={plantilla.id}
                                                    data={plantilla}
                                                />
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        } */}

                    </CardBody>
                </Card>
            </div>
        </>
    )
}
