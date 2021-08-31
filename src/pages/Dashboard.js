import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';
import CardTable from 'components/TableCard';
import WelcomeCard from 'components/WelcomeCard';
import ContactUs from '../components/audit/Email'
import { useSelector } from 'react-redux';
import IntroCard from 'components/Introcard';
import { useEffect } from 'react';


export default function Dashboard() {

    const { estado } = useSelector(state => state.auth)
 


    return (
        <>
            <div className="bg-primary px-3 md:px-8 h-40" />
            {
                estado != 1 ?
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">
                            <div className="grid grid-cols-1 xl:grid-cols-5">
                                <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
                                    <WelcomeCard
                                        nombre='Sistema de auditoria, comienza en simple pasos'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="px-3 md:px-8 -mt-24">
                        <div className="container mx-auto max-w-full">
                            <div className="grid grid-cols-1 xl:grid-cols-5">
                                <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
                                    <IntroCard
                                        nombre='Inicia completando su registro'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

            }
            {/* 
            <ContactUs /> */}

            {/* <div className="px-3 md:px-8">
                <div className=" mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            color="gray"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="gray"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="gray"
                            icon="paid"
                            title="Sales"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="gray"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div> */}

            {/* <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <PageVisitsCard />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <TrafficCard />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
