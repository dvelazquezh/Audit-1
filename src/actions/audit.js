import audiApi from "api/audiApi"
import { types } from "types/types"
import { estado } from "./auth"


export const saveTemplate = (template) => ({
    type: types.auditSaveTemplate,
    payload: template
})


export const selectAudit = (id) => ({
    type: types.auditSelect,
    payload: id
})

export const selectAuditReview = (review) => ({
    type: types.selectReview,
    payload: review
})


// save audits in databases 
export const saveAudit = (RestaurantName, PerformedBy, ManagerName, Name, ReceiverMail, TemplateType, CompanyID) => {
    console.log({ RestaurantName, PerformedBy, ManagerName, Name, ReceiverMail, TemplateType, Company: { Id: CompanyID } });
    return audiApi.post('/Audit',
        {
            RestaurantName,
            PerformedBy,
            ManagerName,
            TotalPointsAcquired: 25,
            FinalScore: 50,
            Name,
            TemplateType,
            ReceiverMail,
            Company: {
                Id: CompanyID
            }
        }
    )
    // await audiApi.post('/Audit', {
    //     withCredentials: true,

    // })
}

export const saveAuditSection = (nombreSesion, maxpoin, id) => {
    console.log({ nombreSesion, maxpoin });
    return audiApi.post('/AuditSection',
        {
            Audit: { id: id },
            Name: nombreSesion,
            Orden: 0,
            MaximunPoints: maxpoin,
            Score: 10
        }
    )
}


export const saveAuditPoint = (Description, AnswerType, Points, id) => {
    console.log({ Description, AnswerType, Points, id });
    return audiApi.post('/AuditPoint',
        {
            Section: { id: id },
            Description,
            AnswerType,
            Points
        }
    )
}



export const saveAuditReview = (Audit_Id, User_Id, Company_Id, Answer, Observation) => {
    console.log({ Audit_Id, User_Id, Company_Id, Answer, Observation });
    return audiApi.post('/AuditReview',
        {
            Audit_Id,
            User_Id,
            Company_Id,
            Answer,
            Observation
        }
    )
}


// ==========================================

// get database audits

// const getAudit = async () => {
//     const res = await audiApi.get("/Audit")
//     console.log(res.data);
// }

//   getAudit()

// ----

const getSection = async () => {
    const res = await audiApi('/AuditSection')
    console.log(res.data);
}

//   getSection()

// -----

const getAuditPoint = async () => {
    const res = await audiApi('/AuditPoint')
    console.log(res.data);
}

// getAuditPoint()



export const reduxSaveAudit = (uditObtained, auditSectionObtainedAll, auditPointObtained, auditObtainedReviews) => ({
    type: types.audit,
    payload: {
        uditObtained,
        auditSectionObtainedAll,
        auditPointObtained,
        auditObtainedReviews
    }
})
