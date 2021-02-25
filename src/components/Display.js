import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/keys';
import styled from 'styled-components';

const Display = () => {

    const [pageData, setPageData] = useState({});

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
            console.log(res);
            setPageData(res.data);
        })
        .catch((err) => console.log(err));

    }, []);

    return (
        <StyleSection>
            
            <StyleHead>
              
               <h1>NASA photo of the day</h1>
               
                
            </StyleHead>

                <StyleContainer>

                    <StyleImg>

                    <p>{pageData.date}</p>
                    <a href={pageData.hdurl}><img src={pageData.url} alt='space' /></a>

                    </StyleImg>

                    <StylePara>
                        <h2>{pageData.title}</h2>
                        <p>{pageData.explanation}</p>
                    </StylePara>
             </StyleContainer>


        </StyleSection>
    )
}

const StyleSection = styled.section`
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: ${(pr) => pr.theme.primaryColor};
    display: flex;
    flex-direction:column;
    
     
    @media (max-width: 550px) {
        width: 95%;
    }
    `;

    const StyleHead = styled.section`
    color: ${(pr) => pr.theme.tertiaryColor};
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    padding-bottom:-5%;
    width:85%;
    font-size:3rem;
    border-bottom: 2px solid #D9CDB8;
    

    @media (max-width: 550px){
            width: 100%;
            
            flex-direction:column;
            justify-content:center;
            align-content:center;
            margin-left:5%;
            font-size:1rem;
            

           
        }


   
    
    `;

    const StyleContainer = styled.section`
        display:flex;
        max-width: 100%;

        @media (max-width: 550px){
            width: 100%;
            
            flex-direction:column;
            justify-content:center;
            align-content:center;
            

           
        }
    `;


    const StyleImg = styled.section`
        width:70%;
        display:flex;
        flex-direction:column;
        img {
            width: 80%;
            border-radius: 20px;
            height: 95vh;
            margin-bottom:5%;
         };
         @media (max-width: 550px){
            width: 100%;
            justify-content:center;
            align-content:center;
            margin-left:4%;
        }
        
        `;


    const StylePara = styled.section`
        p{
            color: ${(pr) => pr.theme.tertiaryColor};
            line-height:2.25;
            
            font-size: 1.3rem;
            width: 90%;
            
        };
        flex-direction: column;
         max-width: 30%; 
         display:flex;

         @media (max-width: 550px){
            max-width: 100%;
            text-align:center;
            margin-left:15%;
           
            justify-content:center;
            align-content:center;

            h2{
                margin-right:5%;
                margin-top:10%;
            }

            
            
        };
    
    `;
    
  
    



export default Display;