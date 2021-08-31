import React from 'react'
import android from '../assets/disponible-en-android.png'
import ios from '../assets/disponible-en-ios.png'
import app from '../assets/App.jpeg'
import app_questions from '../assets/questions.jpeg'
import logo_orbitas from '../assets/orbitas_logo.png'
import landing from '../assets/imagen_landing.png'
import './onda.css'

const Intro = () => {


    return (
        <>
            <div className='md:grid grid-cols-2' >
                <div className=' col-span-1 ml-5  z-10'>
                    <div className='mx-10 auto' >
                        <h1 className='font-bold text-gray-900 text-4xl md:text-6xl mt-16  ' >Crea auditorías, cuestionarios, listas o encuestas.</h1>
                        <h1 className='font-semibold text-gray-900 text-3xl md:text-2xl mt-6' >Todo bajo una plataforma IOS y Android además de una plataforma WebAdmin donde se consolidaran las respuestas
                            notas por restaurante o país </h1>
                        <h1 className='font-bold text-gray-900 text-3xl md:text-5xl mt-10' >¡Regístrate y comienza!</h1>
                    </div>
                    <div className='mx-10 auto mt-10 flex ' >
                        <a href="#">
                            <img
                                className='w-40 mr-3'
                                src={android}
                            />
                        </a>
                        <a href="#">
                            <img
                                className='w-40 h-12'
                                src={ios}
                            />
                        </a>

                    </div>
                </div>
                <div className='col-span-1 md:flex  justify-center ml-5 mt-20 hidden ' >


                    <div className='flex gap-4 sm:invisible lg:visible ' >

                        <img
                            className='w-full h-96 border-t-0 rounded-t-xl shadow-xl  rounded-b-xl'
                            src={app}
                        />


                        <img
                            className='w-full h-96 border-2 border-t-0 rounded-t-xl shadow-2xl  rounded-b-xl'
                            src={app_questions}
                        />


                        <img
                            className='w-full h-96 '
                            src={landing}
                        />



                        {/* <svg id="ade8c9af-8376-4472-9bc3-28567412a130" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="531" height="429.98934" viewBox="0 0 831 729.98934"><path d="M908.4762,788.57689v-72.34S936.66786,767.52287,908.4762,788.57689Z" transform="translate(-184.5 -85.00533)" fill="#f1f1f1" /><path d="M910.21766,788.56417,856.928,739.64292S913.77324,753.55845,910.21766,788.56417Z" transform="translate(-184.5 -85.00533)" fill="#f1f1f1" /><path d="M290.95913,788.57689v-72.34S262.76747,767.52287,290.95913,788.57689Z" transform="translate(-184.5 -85.00533)" fill="#f1f1f1" /><path d="M289.21766,788.56417l53.28963-48.92125S285.66209,753.55845,289.21766,788.56417Z" transform="translate(-184.5 -85.00533)" fill="#f1f1f1" /><path d="M775.25582,252.05354h-3.86238V146.24468a61.23928,61.23928,0,0,0-61.23923-61.23935H485.9837a61.23927,61.23927,0,0,0-61.2394,61.23916V726.72032a61.2393,61.2393,0,0,0,61.23922,61.23935H710.15391a61.2393,61.2393,0,0,0,61.23947-61.23911V327.3701h3.86244Z" transform="translate(-184.5 -85.00533)" fill="#3f3d56" /><path d="M712.625,100.93768H683.36335a21.72758,21.72758,0,0,1-20.11676,29.93348H534.82222a21.72754,21.72754,0,0,1-20.11676-29.93351H487.375a45.73283,45.73283,0,0,0-45.73286,45.73276V726.2945a45.73282,45.73282,0,0,0,45.7328,45.73286H712.625a45.73283,45.73283,0,0,0,45.73286-45.7328h0V146.67045A45.73279,45.73279,0,0,0,712.625,100.93768Z" transform="translate(-184.5 -85.00533)" fill="#fff" /><path d="M706.98254,762.07515H493.01746c-24.58521,0-44.58667-17.85253-44.58667-39.79589V693.46871c0-17.48975,15.92895-31.71875,35.50805-31.71875H716.06116c19.5791,0,35.50805,14.229,35.50805,31.71875v28.81055C751.56921,744.22262,731.56775,762.07515,706.98254,762.07515Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M515.50942,277.85025H467.78191a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,515.50942,277.85025Z" transform="translate(-184.5 -85.00533)" fill="#6c63ff" /><path d="M587.74564,277.85025h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,587.74564,277.85025Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M659.98186,277.85025h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,659.98186,277.85025Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M732.21809,277.85025H684.49058a3.22863,3.22863,0,0,1-3.22483-3.22483V226.89791a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.72751A3.22863,3.22863,0,0,1,732.21809,277.85025Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M515.33871,366.21063h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,515.33871,366.21063Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M587.57493,366.21063h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22863,3.22863,0,0,1,3.22484,3.22483v47.7275A3.22864,3.22864,0,0,1,587.57493,366.21063Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M659.81116,366.21063H612.08365a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,659.81116,366.21063Z" transform="translate(-184.5 -85.00533)" fill="#6c63ff" /><path d="M732.04738,366.21063h-47.7275a3.22864,3.22864,0,0,1-3.22484-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22484-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,732.04738,366.21063Z" transform="translate(-184.5 -85.00533)" fill="#6c63ff" /><path d="M515.168,454.571H467.4405a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483H515.168a3.22863,3.22863,0,0,1,3.22484,3.22483v47.7275A3.22864,3.22864,0,0,1,515.168,454.571Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M587.40423,454.571H539.67672a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,587.40423,454.571Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M659.64045,454.571H611.913a3.22864,3.22864,0,0,1-3.22484-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22484-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,659.64045,454.571Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M731.87667,454.571h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,731.87667,454.571Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M514.9973,542.93139H467.26979a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483H514.9973a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,514.9973,542.93139Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M587.23352,542.93139H539.506a3.22864,3.22864,0,0,1-3.22484-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22484-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,587.23352,542.93139Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M659.46974,542.93139h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,659.46974,542.93139Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M731.706,542.93139H683.97846a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483H731.706a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,731.706,542.93139Z" transform="translate(-184.5 -85.00533)" fill="#e5e5e5" /><path d="M515.50942,740.29107H467.78191a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,515.50942,740.29107Z" transform="translate(-184.5 -85.00533)" fill="#fff" /><path d="M587.74564,740.29107h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,587.74564,740.29107Z" transform="translate(-184.5 -85.00533)" fill="#fff" /><path d="M659.98186,740.29107h-47.7275a3.22863,3.22863,0,0,1-3.22483-3.22484v-47.7275a3.22862,3.22862,0,0,1,3.22483-3.22483h47.7275a3.22862,3.22862,0,0,1,3.22483,3.22483v47.7275A3.22863,3.22863,0,0,1,659.98186,740.29107Z" transform="translate(-184.5 -85.00533)" fill="#fff" /><path d="M732.21809,740.29107H684.49058a3.22864,3.22864,0,0,1-3.22483-3.22484v-47.7275a3.22863,3.22863,0,0,1,3.22483-3.22483h47.72751a3.22863,3.22863,0,0,1,3.22483,3.22483v47.7275A3.22864,3.22864,0,0,1,732.21809,740.29107Z" transform="translate(-184.5 -85.00533)" fill="#fff" /><circle cx="392.11051" cy="548.22133" r="6.44966" fill="#e5e5e5" /><circle cx="415.32929" cy="548.22133" r="6.44966" fill="#e5e5e5" /><circle cx="438.54808" cy="548.22133" r="6.44966" fill="#e5e5e5" /><path d="M1014.5,789.00533h-829a1,1,0,0,1,0-2h829a1,1,0,0,1,0,2Z" transform="translate(-184.5 -85.00533)" fill="#cbcbcb" /><path d="M510.864,592.10718a13.04925,13.04925,0,0,0-1.75972-19.93187l12.59561-44.62912-22.9642,7.30333-8.44035,41.26089A13.11993,13.11993,0,0,0,510.864,592.10718Z" transform="translate(-184.5 -85.00533)" fill="#ffb7b7" /><path d="M517.39368,564.75191a5.96933,5.96933,0,0,1-1.24508.10531l-22.02964-.44139a5.83948,5.83948,0,0,1-5.65948-6.693L510.80711,406.732a18.51184,18.51184,0,0,1,18.25725-15.71657h0a18.41265,18.41265,0,0,1,17.83,22.82525l-15.84048,64.15663L522.07066,559.658A5.80616,5.80616,0,0,1,517.39368,564.75191Z" transform="translate(-184.5 -85.00533)" fill="#3f3d56" /><polygon points="342.105 718.105 354.365 718.105 360.198 670.817 342.103 670.818 342.105 718.105" fill="#ffb7b7" /><path d="M523.47815,799.108l24.144-.001h.001a15.3873,15.3873,0,0,1,15.38647,15.38623v.5l-39.53076.00147Z" transform="translate(-184.5 -85.00533)" fill="#2f2e41" /><polygon points="394.382 714.123 406.565 715.489 417.632 669.146 399.65 667.13 394.382 714.123" fill="#ffb7b7" /><path d="M576.22006,794.80228l23.99372,2.69008.001.00011a15.38731,15.38731,0,0,1,13.57568,17.00532l-.05573.49688-39.28462-4.40458Z" transform="translate(-184.5 -85.00533)" fill="#2f2e41" /><path d="M515.09858,539.9603s-16.808,37.20886-1.96521,61.37694l8.84283,188.16809h20.30315l19.69685-152,35,45L575.65255,787.53294l24.83152,1.394L634.9762,682.50533S608.47831,565.15663,599.72725,562.331l-5.75105-26.82565Z" transform="translate(-184.5 -85.00533)" fill="#2f2e41" /><path d="M507.61793,572.62738s-15.14173,17.37795,24.85827,23.37795,82-3,83-15S507.61793,572.62738,507.61793,572.62738Z" transform="translate(-184.5 -85.00533)" fill="#cbcbcb" /><path d="M708.1348,357.05837a11.61132,11.61132,0,0,1-14.05875,10.92486l-15.11989,21.80439-15.49148-5.95655,21.78468-30.49213a11.67422,11.67422,0,0,1,22.88544,3.71943Z" transform="translate(-184.5 -85.00533)" fill="#ffb7b7" /><path d="M580.2636,385.112l-21.37737-9.671L531.49666,377.399s-33.02046,38.6063-20.02046,75.6063l-8,129c51,14,74.1831-12.25781,111-1L603.10422,437.636Z" transform="translate(-184.5 -85.00533)" fill="#3f3d56" /><path d="M565.9762,394.50533l14.2874-9.39337s19.84646-3,27.77953,4.69668c0,0,26.92659,2.25376,33.42983,8.97523l7.16026,1.6141,23.7869-30.80184,14.55608,7.9092-21,57-62.872,3.13064Z" transform="translate(-184.5 -85.00533)" fill="#3f3d56" /><circle cx="554.72002" cy="334.98279" r="33.74484" transform="translate(-277.19936 222.12213) rotate(-28.66318)" fill="#ffb7b7" /><path d="M525.53291,308.60053c6.02337-10.83362,13.55038-17.84837,25.94329-17.5952s23.11287-.23674,28.68877,10.83384a18.20735,18.20735,0,0,0,2.14293-8.97911,10.2833,10.2833,0,0,1,4.53932,10.34472,7.50982,7.50982,0,0,0,3.70778-6.16528c4.136,1.37646,5.2115,7.20519,3.11866,11.02892s-6.19726,6.03481-10.13517,7.904-2.1199,11.75518-4.69141,15.27487c-1.79468,2.45641-2.61549,5.4668-3.82479,8.25829a.54091.54091,0,0,1-.2448.25565c-2.77277,1.54608-4.5229,4.30857-4.03339,7.44529a1.21274,1.21274,0,0,1-.03945.70958c-3.51018,6.613-7.29926,13.53194-13.66181,17.478a22.65364,22.65364,0,0,1-17.01862,2.63072c-6.50353-1.55494-12.1259-5.86678-16.18006-11.18444s-6.662-11.60249-8.62153-17.99576c-1.73827-5.6714-3.00232-11.73529-1.62409-17.50476s6.04709-11.112,11.96211-11.55783" transform="translate(-184.5 -85.00533)" fill="#2f2e41" /></svg> */}
                    </div>
                </div>
            </div>
            <div className=' fixed  top-auto right-0 left-0 bottom-0 posicion' >
                {/* <div className='absolute right-32  bottom-44' >
                    <img
                        className='w-40 border-t-0 rounded-t-xl  rounded-b-xl'
                        src={logo_orbitas}
                    />
                </div> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#33f" fillOpacity="1" d="M0,96L40,128C80,160,160,224,240,240C320,256,400,224,480,208C560,192,640,192,720,186.7C800,181,880,171,960,160C1040,149,1120,139,1200,154.7C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>

        </>
    )
}

export default Intro
