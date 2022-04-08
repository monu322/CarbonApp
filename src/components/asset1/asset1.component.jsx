
import React, { useState, useRef, useContext } from 'react';

import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import "react-datepicker/dist/react-datepicker.css";
import './asset1.styles.scss';

import { Asset1DataContext } from '../../contexts/asset1Context';

import {Form, Button, Row, Col} from 'react-bootstrap';

function Asset1() {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [minError, setMinError] = useState(false);
    const [maxError, setMaxError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    const dateField = useRef(null);
    const timeField = useRef(null);

    let formValid = true;

    const {asset1Data, setAsset1Data} = useContext(Asset1DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        let minVal = e.target.minVal.value;
        let maxVal = e.target.maxVal.value;

        
        if(minVal!=='')
        {
            minVal = parseInt(minVal);

            if(minVal>0 || minVal<-100)
            {
                formValid = false
                setMinError(true)
            }
            else
            {
                setMinError(false);
            }
        }
        else
        {
            formValid = false
            setMinError(true)
        }


       
        if(maxVal!=='')
        {
            maxVal = parseInt(maxVal);

            if(maxVal>100 || maxVal<0)
            {
                formValid = false
                setMaxError(true)
            }
            else
            {
                setMaxError(false);
            }
        }
        else
        {
            formValid = false
            setMaxError(true)
        }

        let minutes = null;
        let hours = null;

        if(time instanceof Date)
        {
            console.log('time is date obj')
            minutes = time.getMinutes();
            hours = time.getHours();
        }
        else
        {
            minutes = parseInt(time.split(':')[1])
            hours = parseInt(time.split(':')[0])
        }

        console.log('minutes', minutes);

        if(minutes===0 || minutes===30)
        {
            setTimeError(false)
        }
        else
        {
            formValid = false
            setTimeError(true)
        }

        console.log('formValid', formValid);

        if(formValid)
        {
            console.log('data', date, time, minVal, maxVal)

            let submittedTime = new Date(date.getFullYear(), date.getMonth(), date.getDay(), hours, minutes)

            asset1Data.push({
                time: submittedTime,
                min:minVal,
                max:maxVal
            })

            new Date(date.getFullYear(), date.getMonth(), date.getDay(), hours, minutes)

            asset1Data.sort(function(a, b) {
                var keyA = new Date(a.time),
                    keyB = new Date(b.time);
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });

            setAsset1Data([...asset1Data]);
            console.log(asset1Data);
        }
    };


    


    return (
        <div className="content-box">
            <div className="box-heading">
                Asset 1 
            </div>

          <div className="box-content">

          <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Minimum {minError?<span className='error-msg'>Enter a value between -100 and 0</span>:null}</Form.Label>
                    <Form.Control className={minError?'has-error':null} type="number" name="minVal" placeholder="Enter a value beteween -100 and 0" />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Maximum {maxError?<span className='error-msg'>Enter a value between 0 and 100</span>:null}</Form.Label>
                    <Form.Control className={maxError?'has-error':null} type="number" name="maxVal" placeholder="Enter a value beteween 0 and 100" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Date</Form.Label>
                        <DatePicker
                            ref={dateField}
                            className='date-field'
                            selected={date}
                            name='date'
                            maxDate={new Date()}
                            onChange={(date) => {
                                setDate(date)
                            }}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Time {timeError?<span className='error-msg'>Time must be at 30 min interval</span>:null}</Form.Label>
                        <TimePicker
                            ref={timeField}
                            format={"HH:mm"}
                            name='time'
                            onChange={setTime}
                            value={time}
                            className={timeError?'has-error':null}
                        />
                    </Form.Group>
                </Row>

                

                <Button size="sm" variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

          </div>

        </div>
    )
}

export default Asset1;