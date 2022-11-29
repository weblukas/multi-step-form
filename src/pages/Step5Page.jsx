import React from 'react';
import Stepper from '../components/Stepper/Stepper';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import HorizontalDivider from '../components/HorizontalDivider/HorizontalDivider';
import style from './Step5Page.module.scss';
import PlanCard from '../components/PlanCard/PlanCard';
import Subheading from '../components/Subheading/Subheading';
import Button from '../components/Button/Button';
import FormGroup from '@mui/material/FormGroup';
import CheckboxComponent from '../components/CheckboxComponent/CheckboxComponent';
import DatePicker from '../components/DatePicker/DatePicker';
import Textarea from '../components/Textarea/Textarea';

const Step5Page = () => {
    const [checked, setChecked] = React.useState({
        semanticCoding: false,
        mobileApp: false,
        mobileDesign: false
    });

    const handleSubmit = () => {};

    const handleChange = (e) => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    };
    const { semanticCoding, mobileApp, mobileDesign } = checked;
    return (
        <section className={style.servicesContainer}>
            <div className={style.flexContainer}>
                <Stepper progress="5" />
                <ProgressBar progress="5" />
            </div>
            <Heading fontSize="small">Complete Final Step</Heading>
            <Paragraph fontSize="medium">
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concluda- turque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel."
            </Paragraph>
            <DatePicker />
            <div className={style.planCardContainer}>
                <PlanCard img="plan1.png">
                    <Subheading>Unlimited plan</Subheading>
                    <Paragraph fontSize="small">
                        Tation argumentum et usu, dicit viderer evertitur te
                        has. Eu dictas concludaturque usu,
                    </Paragraph>
                </PlanCard>
                <PlanCard img="plan2.png">
                    <Subheading>Limited plan</Subheading>
                    <Paragraph fontSize="small">
                        Tation argumentum et usu, dicit viderer evertitur te
                        has. Eu dictas concludaturque usu,
                    </Paragraph>
                </PlanCard>
            </div>
            <Subheading fontSize="small" fontWeight="weight800" color="grey400">
                Optimatization and Accessibility
            </Subheading>
            <FormGroup row={true} style={{ marginTop: 16 }}>
                <CheckboxComponent
                    checked={semanticCoding}
                    onChange={handleChange}
                    name="semanticCoding"
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Semantic coding"
                />
                <CheckboxComponent
                    checked={mobileApp}
                    onChange={handleChange}
                    name="mobileApp"
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Mobile APP"
                />
                <CheckboxComponent
                    checked={mobileDesign}
                    onChange={handleChange}
                    name="mobileDesign"
                    inputProps={{ 'aria-label': 'controlled' }}
                    label="Mobile Design"
                />
            </FormGroup>
            <div>
                <Textarea />
            </div>
            <HorizontalDivider className={style.horizontalDivider} />
            <div className={style.btnContainer}>
                <Button
                    handleClick={handleSubmit}
                    size="small"
                    variant="primary"
                >
                    Submit
                </Button>
            </div>
        </section>
    );
};

export default Step5Page;
