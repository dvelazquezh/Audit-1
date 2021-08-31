import { selectAudit } from "actions/audit";
import { useDispatch } from "react-redux";

export default function CardTable({ data }) {

    const dispatch = useDispatch()

    const { companyID, name, restaurantName, performedBy, managerName, templateType, id, creationDate } = data
    
    const fecha = creationDate
    const divicion = fecha.split("T",1)
    

    return (
        <tr>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {name}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {divicion}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {restaurantName}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {performedBy}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {managerName}
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                { 
                    templateType == 1 ? 'Cuestionario' :
                    templateType == 2 ? 'Auditoria Digital' :
                    templateType == 3 ? 'Lista' :
                    templateType == 4 ? 'Encuesta' :
                    null
                }
            </th>
            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                <a
                     onClick={() => dispatch(selectAudit(id))}
                    // onClick={() => console.log({id})}
                ><i className="far fa-play-circle fa-2x cursor-pointer"></i></a>

            </th>
        </tr>
    );
}
