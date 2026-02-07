import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import {theme} from '../../assets/theme';
import Typography from '@mui/material/Typography';
import Typical from '../atoms/Typical';
import mainPicture  from '../../assets/images/mainPicture.jpg';
import resumePdf from '../../assets/JeanPierre_Sfeir_Resume.pdf';
import ImageBox from '../molecules/imageBox';
import {codingLanguages, contactLinks} from '../../const/constants';
import FileSaver from 'file-saver';

interface IntroCommandLine {
    command: string;
    output: string;
    channel?: "stdout" | "system";
}

interface IntroCommandRenderLine extends IntroCommandLine {
    typedCommand: string;
    showOutput: boolean;
}

 const SummarySection = () => {
    
    const SPEED = 1.5;
    const introCommands = React.useMemo<IntroCommandLine[]>(() => ([
        { command: "whoami", output: "jean-pierre-sfeir", channel: "stdout" },
        { command: "cat ./role.txt", output: "software-engineer (cybersecurity)", channel: "stdout" },
        { command: "cat ./stack.txt", output: "go | java | spring-boot | terraform | kubernetes | react", channel: "stdout" },
        { command: "ls ./sections", output: "home  projects  skills  about  experience", channel: "stdout" },
        { command: "echo $OPEN_TO", output: "open to software engineering opportunities", channel: "system" },
        { command: "echo $STATUS", output: "ready", channel: "system" },
    ]), []);
    const [introLines, setIntroLines] = React.useState<IntroCommandRenderLine[]>(
        introCommands.map((line) => ({ ...line, typedCommand: "", showOutput: false }))
    );
    const [introComplete, setIntroComplete] = React.useState(false);

    React.useEffect(() => {
        const staticLines = introCommands.map((line) => ({
            ...line,
            typedCommand: line.command,
            showOutput: true
        }));
        const animatedLines = introCommands.map((line) => ({
            ...line,
            typedCommand: "",
            showOutput: false
        }));

        if (typeof window === "undefined") {
            setIntroLines(staticLines);
            setIntroComplete(true);
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            setIntroLines(staticLines);
            setIntroComplete(true);
            return;
        }

        let cancelled = false;
        setIntroLines(animatedLines);
        setIntroComplete(false);

        const delay = (ms: number) => new Promise<void>((resolve) => {
            window.setTimeout(() => resolve(), ms);
        });

        const runIntro = async () => {
            for (let lineIndex = 0; lineIndex < introCommands.length; lineIndex += 1) {
                const currentCommand = introCommands[lineIndex].command;
                for (let charIndex = 1; charIndex <= currentCommand.length; charIndex += 1) {
                    if (cancelled) {
                        return;
                    }
                    const nextText = currentCommand.slice(0, charIndex);
                    setIntroLines((previous) => previous.map((line, index) => (
                        index === lineIndex ? { ...line, typedCommand: nextText } : line
                    )));
                    await delay(24);
                }

                if (cancelled) {
                    return;
                }

                await delay(90);
                setIntroLines((previous) => previous.map((line, index) => (
                    index === lineIndex ? { ...line, showOutput: true } : line
                )));
                await delay(130);
            }

            if (cancelled) {
                return;
            }

            setIntroComplete(true);
        };

        runIntro();

        return () => {
            cancelled = true;
        };
    }, [introCommands]);

    const activeIntroLine = introLines.findIndex((line) => !line.showOutput);
    const lastRenderedLineIndex = introLines.reduce((lastIndex, line, index) => (
        line.typedCommand.length > 0 || line.showOutput ? index : lastIndex
    ), -1);
    const visibleLineLimit = introComplete
        ? introLines.length - 1
        : Math.max(activeIntroLine, lastRenderedLineIndex);

    const primaryButtonStyle = {
        backgroundColor: "transparent",
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
        fontSize: theme.typography.h6.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
        padding: '10px',
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.main,
          },
        
    }
    const secondaryButtonStyle = {
        backgroundColor: "transparent",
        border: '1px solid',
        borderColor: theme.palette.background.secondary,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h6.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: theme.typography.h6.letterSpacing,
        padding: '10px',
        borderRadius: '0px',
        marginLeft: { xs: 0, sm: '12px' },
        marginTop: { xs: '10px', sm: 0 },
        '&:hover': {
            backgroundColor: theme.palette.background.secondary,
            borderColor: theme.palette.background.secondary,
            color: theme.palette.text.primary,
          },
    }

    const aboutBoxStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        gap: { xs: '16px', md: '0px' },
        }


    const aboutBoxTextStyle = {
        justifyContent: 'center',

    }

    const aboutHeadertStyle ={
        color: theme.palette.text.primary,
        fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize },
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing,
        lineHeight: 1.4,
        maxWidth: "100%",
        overflowWrap: "anywhere",
        marginVertical: '5px',
    }
    const aboutTextStyle ={
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body1.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body1.fontWeight,
        letterSpacing: theme.typography.body1.letterSpacing,
        lineHeight: 1.7,
        maxWidth: "100%",
        overflowWrap: "anywhere",
    }

    const styleSpecChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h3.fontWeight,
    letterSpacing: theme.typography.h3.letterSpacing, 
    fontSize: theme.typography.h3.fontSize,
    }

    const introHeaderStyle = {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.subtitle2.fontSize,
        fontFamily: theme.typography.fontFamily,
        letterSpacing: theme.typography.subtitle1.letterSpacing,
        textTransform: "uppercase",
    }

    const introActionStyle = {
        marginTop: '14px',
        minHeight: '40px',
        backgroundColor: "transparent",
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        fontSize: theme.typography.subtitle1.fontSize,
        fontFamily: theme.typography.fontFamily,
        letterSpacing: theme.typography.subtitle1.letterSpacing,
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.main,
        },
    }

    const quoteBoxStyle ={
        quoteBoxStyle:{
            paddingTop: { xs: '1vh', md: '2vh' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: '12px',


        },

        textStyle: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.h6.fontSize,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            letterSpacing: theme.typography.body1.letterSpacing,
            textAlign: { xs: 'center', md: 'left' },
        
        },

        quoteTextStyle:{
            color: theme.palette.text.secondary,
            fontSize: theme.typography.h1.fontSize,
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.h1.fontWeight,
            letterSpacing: theme.typography.h6.letterSpacing,
        },
        fieldSet:{
            display: 'flex',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: theme.palette.background.secondary,
            padding: '12px 16px',
            maxWidth: '100%',
        },
        legendCaption :{ 
            position: 'relative',
            bottom: "-2.2ex", 
            left: "0%", 
            width: "30px",
            backgroundColor: theme.palette.background.default  
        },
        
        legend:{
            position: 'absolute',
            top: -10,
            left: 10,
            fontWeight: 'bold',
            backgroundColor: '#FFFFFF'
        }
    }

    const saveManual = () => {
        FileSaver.saveAs(resumePdf, "JeanPierre_Sfeir_Resume.pdf");
    };

    return (
        <Box sx={{minHeight: '70vh'}} id="home">
            
            <Grid container spacing={2} sx={aboutBoxStyle}  >
                <Grid item xs={12} md={6} order={{xs:1,sm:1, md:1}} sx={{ minWidth: 0 }}>
                    
                    <Box sx={aboutBoxTextStyle}>
                        <Box className="terminal-header-block">
                            <Box className="terminal-status">
                                <span>status: ok</span>
                                <span>uptime: 2y</span>
                                <span>build: release</span>
                            </Box>
                            <Typography sx={aboutHeadertStyle} className="terminal-heading">
                                <span className="terminal-prompt">jp@linux:~$</span>
                                <span style={styleSpecChar} className="terminal-cursor">#</span>
                                <span>cat home.txt</span>
                                <span className="terminal-cursor">█</span>
                            </Typography>
                        </Box>
                        <Grid item xs={12} >
                            <Typography sx={aboutHeadertStyle}> 
                            Jean is a <span style={styleSpecChar}> Software Engineer</span> focused on secure platforms and reliable systems, and loves to&nbsp;<span>
                            <Typical
                                steps={codingLanguages}
                                loop={1}
                                wrapper="span"
                            />
                            </span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{paddingTop:"20px"}}>
                            <Typography sx={aboutTextStyle}>
                                He builds secure backend services for high-trust environments while still shipping polished web experiences.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{paddingTop:"20px"}}>
                            <Button variant="outlined" sx={primaryButtonStyle} onClick={()=>{saveManual()}}>./download_resume</Button>
                            <Button variant="outlined" sx={secondaryButtonStyle} href={contactLinks.email}>./contact</Button>
                        </Grid>
                        <Grid item xs={12} sx={{paddingTop:"20px"}}>
                            <Box className="terminal-output terminal-log">
                                <span className="terminal-log-line">role: Cybersecurity Software Engineer @ Government of Canada (Aug 2024 - Present)</span>
                                <span className="terminal-log-line">education: M.Eng. Interdisciplinary AI @ uOttawa (Sep 2024 - Present)</span>
                                <span className="terminal-log-line">focus: Java, Go, Kubernetes, Terraform, RabbitMQ, S3-compatible storage</span>
                                <span className="terminal-log-line">delivery: CI/CD via Jenkins + Bitbucket, observability with Grafana + Splunk</span>
                                <span className="terminal-log-line">tooling: Internal CLI with Picocli + GraalVM native builds</span>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{paddingTop:"16px"}}>
                            <Box className="terminal-output terminal-command-intro" aria-live="polite">
                                <Typography sx={introHeaderStyle}>
                                    quick_intro.sh [{introComplete ? "completed" : "running"}]
                                </Typography>
                                <Box className="terminal-command-list terminal-stdout">
                                    {introLines.map((line, index) => {
                                        if (index > visibleLineLimit) {
                                            return null;
                                        }

                                        return (
                                        <Box className="terminal-command-entry" key={`${line.command}-${line.output}`}>
                                            <Box className={`terminal-command-line${line.channel === "system" ? " terminal-command-line--system" : ""}`}>
                                                <span className="terminal-prompt">jp@linux:~$</span>
                                                <span className="terminal-command-typing">
                                                    {line.typedCommand}
                                                    {index === activeIntroLine && !introComplete && (
                                                        <span className="terminal-type-cursor">█</span>
                                                    )}
                                                </span>
                                            </Box>
                                            {line.showOutput && (
                                                <Box className={`terminal-command-response${line.channel === "system" ? " terminal-command-response--system" : ""}`}>
                                                    <span>{line.output}</span>
                                                </Box>
                                            )}
                                        </Box>
                                    )})}
                                    {introComplete && (
                                        <Box className="terminal-command-response terminal-command-response--system">
                                            <span>intro complete. next target: #projects</span>
                                        </Box>
                                    )}
                                </Box>
                                <Button
                                    variant="outlined"
                                    sx={introActionStyle}
                                    href="#projects"
                                    className="terminal-focus-target"
                                >
                                    Explore Projects
                                </Button>
                            </Box>
                        </Grid>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{xs:1,sm:1, md:1}} sx={{ minWidth: 0 }}>
                    <ImageBox
                            image={mainPicture}
                            speed= {SPEED}
                    />
                </Grid>
            </Grid>
            <Grid xs={12} md={12} order={{xs: 3}} >
                <Box sx={quoteBoxStyle.quoteBoxStyle}>
                    <fieldset style={quoteBoxStyle.fieldSet}>
                        <legend style={{...quoteBoxStyle.quoteTextStyle}} >"</legend> 
                        <Typography sx={quoteBoxStyle.textStyle}>
                        If at first you don't succeed; call it version 1.0                        
                        </Typography> 
                        <Box sx={{...quoteBoxStyle.legendCaption,...quoteBoxStyle.quoteTextStyle}}>"</Box>
                    </fieldset> 
                </Box>
            </Grid>
        </Box>        
    )

}
export default SummarySection;
