import React from 'react';
import Icon1 from '../../images/Admin-amico.png';
import Icon2 from '../../images/teacher.png'
import Icon3 from '../../images/parent.png';
import { ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP 
        } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer style={{ background: 'linear-gradient(to right, #ABDCFF, #0396FF)', position: 'relative' }}
           id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Web Portal For Admin</ServicesH2>
                    <ServicesP>School Admin Registers The Teachers, Students, Parents, And Subjects</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Mobile App For Teacher</ServicesH2>
                    <ServicesP>Teacher Provides Feedback And Reports Of Students And View Progress</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Mobile App For Parent</ServicesH2>
                    <ServicesP>Parents Would Give Acknowledgement, View Progress And Reports  </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
