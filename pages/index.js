import Header from '../components/Header'
import TabBox from '../components/TabBox'
import ProjectCard from '../components/ProjectCard'
import { Grid, Typography, makeStyles, Container, Divider, Card, CardContent, Chip, Box, } from '@material-ui/core';
import { useRef } from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    chip: {
        margin: theme.spacing(0.15)
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
        <Container maxWidth="md">
            <Header handleAbout={handleAbout} handleExp={handleExp} handleProj={handleProj} />

            <Box my={20}>
                <Typography variant="subtitle1">Hi, my name is</Typography>
                <Typography variant="h2">Sharandeep Singh</Typography>
                <Typography variant="body1">I am a Software Engineer from San Jose State University, located in Union City, CA.</Typography>

            </Box>

            <Box my={25}>
                <div ref={aboutRef}>
                    <Typography variant="h4" >About</Typography>
                </div>
                <Typography variant="body1">
                    Hello! I am Sharandeep, a Software Engineer with a versatile set of skills. I like to develop distributed applications
                    that can be scaled to handle large amounts of traffic.<br></br> <br></br> My main focus is in back-end engineering, although I am also
                    experienced in front-end development and DevOps.<br></br><br></br>
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Languages:
                    <Chip label="Java" variant="outlined" className={classes.chip} />
                    <Chip label="Golang" variant="outlined" className={classes.chip} />
                    <Chip label="Python" variant="outlined" className={classes.chip} />
                    <Chip label="JavaScript" variant="outlined" className={classes.chip} />
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    DevOps:
                    <Chip label="Jenkins" variant="outlined" className={classes.chip} />
                    <Chip label="Kubernetes" variant="outlined" className={classes.chip} />
                </Typography>


                <Typography variant="subtitle1" gutterBottom>
                    Front-End:
                    <Chip label="React.Js" variant="outlined" className={classes.chip} />
                    <Chip label="Next.Js" variant="outlined" className={classes.chip} />
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Back-End:
                    <Chip label="Spring Framework" variant="outlined" className={classes.chip} />
                    <Chip label="Hibernate ORM" variant="outlined" className={classes.chip} />
                    <Chip label="Spring Boot" variant="outlined" className={classes.chip} />
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Databases:
                    <Chip label="Kafka" variant="outlined" className={classes.chip} />
                    <Chip label="Orcale SQL" variant="outlined" className={classes.chip} />
                    <Chip label="MongoDB" variant="outlined" className={classes.chip} />
                    <Chip label="Cassandra" variant="outlined" className={classes.chip} />
                    <Chip label="DynamoDB" variant="outlined" className={classes.chip} />
                </Typography>

            </Box>

            <Box my={25}>
                <div ref={expRef}>
                    <Typography variant="h4" gutterBottom>
                        Experience
                    </Typography>
                </div>
                <TabBox />

            </Box>

            <Box my={25}>
                <div ref={projRef}>
                    <Typography variant="h4" className={classes.text_5} gutterBottom>
                        Projects
                    </Typography>
                </div>
                <Grid container direction="row" spacing={1}>
                    <Grid item>
                        <ProjectCard title="Zule" link="https://github.com/shsingh67/next-hotels">
                            A simple web application that allows hotel search and booking.<br></br><br></br>
                        </ProjectCard>

                    </Grid>

                    <Grid item>
                        <ProjectCard title="Hotels Search Service" link="https://github.com/shsingh67/hotels-search-service">
                            Spring Boot micro-service that exposes a Rest API for searching hotels. The service uses Redis data storage to speed up query resutls.
                        </ProjectCard>

                    </Grid>
                    <Grid item>
                        <ProjectCard title="Deployment Service" link="https://github.com/shsingh67/Services-Automation">
                            A proof of concept to show how deploying docker containers to AWS EC2 can be completely automated.
                        </ProjectCard>

                    </Grid>
                </Grid>
            </Box>




        </Container>

    );
}