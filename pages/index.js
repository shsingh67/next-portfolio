import Header from '../components/Header'
import TabBox from '../components/TabBox'
import ProjectCard from '../components/ProjectCard'
import { Grid, Typography, makeStyles, Container, Divider, Card, CardContent, Chip } from '@material-ui/core';
import { useRef } from 'react';


const useStyles = makeStyles(theme => ({
    text_1: {
        marginTop: '100px'
    },
    text_2: {
        marginTop: '50px',
        marginBottom: '300px'
    },
    text_3: {
        marginBottom: '40px'
    },
    text_4: {
        marginBottom: "200px"
    },
    text_5: {
        marginTop: "200px"
    },
    chip: {
        margin: theme.spacing(0.5)
    }

}));

const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
}

export default function Index() {
    const classes = useStyles();
    const aboutRef = useRef(null);
    const expRef = useRef(null);
    const projRef = useRef(null);
    
    const handleAbout = () => {
        scrollToRef(aboutRef)
    }

    const handleExp = () => {
        scrollToRef(expRef)
    }

    const handleProj = () => {
        scrollToRef(projRef)
    }

    return (
        <div>
            <Header handleAbout={handleAbout} handleExp={handleExp} handleProj={handleProj}/>

            <Container fixed>
                <Typography variant="subtitle1" className={classes.text_1} gutterBottom>
                    Hi, my name is
                </Typography>

                <Typography variant="h2" gutterBottom>
                    Sharandeep Singh
                </Typography>

                <Typography variant="body1" className={classes.text_2} gutterBottom>
                    I am a Software Engineer from San Jose State University, located in Union City, CA.
                </Typography>
                
                <div ref={aboutRef}>
                    <Typography variant="h4" className={classes.text_3} gutterBottom>
                        About
                    </Typography>
                </div>
               
                <Typography variant="body1" className={classes.text_4} gutterBottom>
                    Hello! I am Sharandeep, a Software Engineer with a versatile set of skills. I like to develop distributed applications
                    that can be scaled to handle large amounts of traffic.<br></br> <br></br> My main focus is in back-end engineering, although I am also
                    experienced in front-end development and DevOps.<br></br><br></br>

                    <Typography variant="subtitle1" gutterBottom>
                        Languages:
                    <Chip label="Java" variant="outlined" />
                    <Chip label="Golang" variant="outlined" />
                    <Chip label="Python" variant="outlined" />
                    <Chip label="JavaScript" variant="outlined" />
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                    DevOps:
                    <Chip label="Jenkins" variant="outlined" />
                    <Chip label="Kubernetes" variant="outlined" />
                    </Typography>
                    
                    <Typography variant="subtitle1" gutterBottom>
                    Front-End:
                    <Chip label="React.Js" variant="outlined" />
                    <Chip label="Next.Js" variant="outlined" />
                    </Typography>
                    
                    <Typography variant="subtitle1" gutterBottom>
                    Back-End:
                    <Chip label="Spring Framework" variant="outlined" />
                    <Chip label="Hibernate ORM" variant="outlined" />
                    <Chip label="Spring Boot" variant="outlined" />
                    </Typography>
                    
                    <Typography variant="subtitle1" gutterBottom>
                    Databases:
                    <Chip label="Kafka" variant="outlined" />
                    <Chip label="Orcale SQL" variant="outlined" />
                    <Chip label="MongoDB" variant="outlined" />
                    <Chip label="Cassandra" variant="outlined" />
                    <Chip label="DynamoDB" variant="outlined" />
                    </Typography>


                </Typography>

                <div ref={expRef}>
                    <Typography variant="h4" gutterBottom>
                        Experience
                    </Typography>
                </div>

                <TabBox />

                <div ref={projRef}>
                    <Typography variant="h4" className={classes.text_5} gutterBottom>
                        Projects
                    </Typography>
                </div>

                <Grid container direction="row" spacing={3} >
                    <Grid item xs={4}>
                        <ProjectCard title="Zule" link="https://github.com/shsingh67/next-hotels">
                            A simple web application that allows hotel search and booking.<br></br><br></br>
                        </ProjectCard>
                        
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard title="Hotels Search Service" link="https://github.com/shsingh67/hotels-search-service">
                            Spring Boot micro-service that exposes a Rest API for searching hotels. The service uses Redis data storage to speed up query resutls.
                        </ProjectCard>
                    </Grid>

                    <Grid item xs={4}>
                        <ProjectCard title="Deployment Service" link="https://github.com/shsingh67/Services-Automation">
                            A proof of concept to show how deploying docker containers to AWS EC2 can be completely automated.
                        </ProjectCard>
                        
                    </Grid>
                </Grid>

            </Container>

        </div>

    );
}