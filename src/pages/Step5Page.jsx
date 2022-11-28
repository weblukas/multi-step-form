import React from 'react'
import Stepper from '../components/Stepper/Stepper'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Heading from '../components/Heading/Heading'
import Paragraph from '../components/Paragraph/Paragraph'
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider'
import style from './Step5Page.module.scss'
import PlanCard from '../components/PlanCard/PlanCard'
import Subheading from '../components/Subheading/Subheading'

const Step5Page = () => {
  return (
    <section className={style.servicesContainer}>
    <div className={style.flexContainer}>
        <Stepper progress="5" />
        <ProgressBar progress="5" />
    </div>
    <Heading fontSize='small'>Complete Final Step</Heading>
    <Paragraph fontSize='medium'>
        Tation argumentum et usu, dicit viderer evertitur te has. Eu
        dictas concluda- turque usu, facete detracto patrioque an per,
        lucilius pertinacia eu vel."
    </Paragraph>
    <div className={style.planCardContainer}>
   <PlanCard img='plan1.png'>
    <Subheading>Unlimited plan</Subheading>
    <Paragraph fontSize='small'>Tation argumentum et usu, dicit
viderer evertitur te has. Eu dictas
concludaturque usu,</Paragraph>
   </PlanCard>
   <PlanCard img='plan2.png'>
    <Subheading>Limited plan</Subheading>
    <Paragraph fontSize='small'>Tation argumentum et usu, dicit
viderer evertitur te has. Eu dictas
concludaturque usu,</Paragraph>
   </PlanCard>
    </div>
    <HorizontalDivider className={style.horizontalDivider} />
</section>
  )
}

export default Step5Page