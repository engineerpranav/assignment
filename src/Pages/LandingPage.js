import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Content from '../Components/Content'
import "./landingPage.css"
 



function LandingPage() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const[vindex,setVindex]=useState(0);

    useEffect(() => {
        setLoading(true);
        fetchData("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");

    }, [vindex])

    const fetchData = (url) => {

        fetch(url).then((res) => {
            console.log(res.ok);
            if (!res.ok) {
                return Promise.reject();
            }
            return res.json()

        }).then((data) => {

            setData(data.texts);
            setLoading(false);

        }).catch((error) => {
            setLoading(false);
            alert("Something Went Wrong");
            throw error
        })
 

    }
    const setter=(value)=>{
       
        if(value=='Heading 1')
        {
           setVindex(+0);
        }
        else if(value=="heading 2")
        {
          setVindex(+1);
        }
        else{
            setVindex(+2);
        }

    }
    const v1="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
    const v2="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
    const v3="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";
    const vidIndex=0;
    const videos=[v1,v2,v3];
     

  

    return (


        <Box mt="100px">

            <Box display="flex" flexDirection="column" gap="30px" w="50%" margin="auto" padding="35px" mt="30px" mb="80px" lineHeight="1.5rem" fontFamily="Gtwalsheimpro,sans-serif">
                <Text class="subheading">Double the hires, half the effort</Text>
                <Text color="#4d4d4d">Open conversations and nurture relationships at scale and be the first choice when your ideal candidate is ready to explore.</Text>
            </Box>

            <Box display="flex" gap="40px">
                <Box display="flex" flexDirection="column" gap="200px" w="50%">
                    {data.map((ele) => {

                        return <Content heading={ele.heading} subheading={ele.subHeading} description={ele.description}   />

                    })}
                </Box>

                <Box>
                    <Box position="sticky" top="100px"   zIndex="1"  >


                        {/* <video  autoplay="true"  style="background-image:url(&quot;https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options(3)-poster-00001.jpg&quot;)" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-transcode.mp4" data-wf-ignore="true"/><source src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options (3)-transcode.webm" data-wf-ignore="true"/></video> */}
                        <Box >

                        <video class="video"  src = {videos[vindex]} autoPlay muted onEnded={() => {
                            if(vindex==2)
                            {
                                setVindex(0);
                            }
                            setVindex(vindex+1)
                            
                            }} />
                            
                        </Box>


                    </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" textAlign="center" gap="30px" padding="35px" w="50%" margin="auto" mt="250px" mb="80px" lineHeight="1.5rem" fontFamily="Gtwalsheimpro,sans-serif">
                <Text class="subheading">Double the hires, half the effort</Text>
                <Text color="#4d4d4d">Open conversations and nurture relationships at scale and be the first choice when your ideal candidate is ready to explore.</Text>
            </Box>

        </Box>
    )
}

export default LandingPage