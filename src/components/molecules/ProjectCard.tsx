import React from 'react';
import '../../App.css';
import {theme} from '../../assets/theme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'react-awesome-slider/dist/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Alert, Button, CardActionArea, Grid, Snackbar } from '@mui/material';
import {Project, projects, ProjectType} from '../../const/constants';
import Typical from '../atoms/Typical';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ProjectCardProps {
    ShowAll: boolean;
    ShowSections: boolean;
}

type ProjectTypeFilter = "All" | ProjectType;
type VisibilityFilter = "All" | "Public" | "Private";
type SortMode = "Featured" | "A-Z";

const PROJECT_SECTION_ORDER: ProjectType[] = ["Application", "Algorithm", "Machine Learning"];

const ProjectCard = (props:ProjectCardProps) => {
    const {ShowAll, ShowSections} = props;

    const [open, setOpen] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState("This repository is private. Contact for walkthrough.");
    const [typeFilter, setTypeFilter] = React.useState<ProjectTypeFilter>("All");
    const [visibilityFilter, setVisibilityFilter] = React.useState<VisibilityFilter>("All");
    const [sortMode, setSortMode] = React.useState<SortMode>("Featured");

    const headerStyle ={
        color: theme.palette.text.special,
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.h2.fontWeight,
        letterSpacing: theme.typography.h2.letterSpacing,
    };

    const textStyle = {
        color: theme.palette.text.primary, 
        fontSize: theme.typography.body1.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body2.fontWeight, 
        letterSpacing: theme.typography.body2.letterSpacing
    };

    const projectDetailTextStyle = {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.body2.fontWeight,
        letterSpacing: theme.typography.body2.letterSpacing,
        marginTop: '6px',
    };

    const textSpecStyle = {
        color: theme.palette.text.special, 
        fontSize: theme.typography.body1.fontSize, 
        fontFamily: theme.typography.fontFamily, 
        fontWeight: theme.typography.body2.fontWeight, 
        letterSpacing: theme.typography.body2.letterSpacing
    };

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        padding: { xs: '12px', md: '20px' },
        width: '100%',
        height: '100%',
    };

    const cardContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', sm: '320px', md: '300px' },
        maxWidth: { xs: '100%', sm: '320px', md: '300px' },
        marginBottom: '20px',
        marginX: { xs: '0px', sm: '12px', md: '20px' },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRadius: '0px',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
    };

    const skillBoxStyle={
        border : '1px solid',
        borderLeft: '0px',
        borderRight: '0px',
        paddingY: '10px',
        marginY: '5px',
        borderColor: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    };

    const styleSpecChar = {
        color: theme.palette.text.special, 
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.h3.fontWeight,
        letterSpacing: theme.typography.h3.letterSpacing, 
        fontSize: theme.typography.h3.fontSize,
    };

    const cardActionStyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
    };

    const snackBarStyle = {
        width: '100%',
        backgroundColor: theme.palette.error.main,
    };

    const sectionHeaderStyle = {
        color: theme.palette.text.special,
        fontSize: theme.typography.h3.fontSize,
        fontFamily: theme.typography.fontFamily2,
        fontWeight: theme.typography.h4.fontWeight,
        letterSpacing: theme.typography.h4.letterSpacing,
        marginTop: '10px',
    };

    const controlLabelStyle = {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.subtitle2.fontSize,
        fontFamily: theme.typography.fontFamily,
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        textTransform: 'uppercase',
    };

    const filterButtonStyle = {
        minHeight: '40px',
        minWidth: '40px',
        borderRadius: '0px',
        borderColor: theme.palette.background.secondary,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.subtitle1.fontSize,
        fontFamily: theme.typography.fontFamily,
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        textTransform: 'none',
        '&:hover': {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.text.primary,
        }
    };

    const typeFilterOptions: ProjectTypeFilter[] = ["All", "Application", "Algorithm", "Machine Learning"];
    const visibilityFilterOptions: VisibilityFilter[] = ["All", "Public", "Private"];
    const sortOptions: SortMode[] = ["Featured", "A-Z"];

    const filteredProjects = React.useMemo(() => {
        const indexedProjects = projects.map((project, index) => ({project, index}));

        const visibleProjects = indexedProjects.filter(({project}) => {
            if (typeFilter !== "All" && project.type !== typeFilter) {
                return false;
            }

            if (visibilityFilter === "Public" && project.isPrivate) {
                return false;
            }

            if (visibilityFilter === "Private" && !project.isPrivate) {
                return false;
            }

            return true;
        });

        const sortedProjects = [...visibleProjects].sort((left, right) => {
            if (sortMode === "A-Z") {
                return left.project.title.localeCompare(right.project.title);
            }

            const leftFeatured = left.project.featured ? 1 : 0;
            const rightFeatured = right.project.featured ? 1 : 0;

            if (leftFeatured !== rightFeatured) {
                return rightFeatured - leftFeatured;
            }

            return left.index - right.index;
        });

        const orderedProjects = sortedProjects.map(({project}) => project);

        if (!ShowAll) {
            return orderedProjects.slice(0, 3);
        }

        return orderedProjects;
    }, [ShowAll, sortMode, typeFilter, visibilityFilter]);

    const projectCountLabel = `${filteredProjects.length} project${filteredProjects.length === 1 ? "" : "s"} shown`;

    const printSkills = (skill:string, index: number, projectTitle: string) => {
        return (
            <span style={textStyle} key={`${projectTitle}-${skill}-${index}`}>
                {skill}
                <span style={textSpecStyle}>|</span>
            </span>
        );
    };

    const handleClose = () => {
        setOpen(false);
    };

    const openRepository = (project: Project) => {
        if (!project.isPrivate && project.link) {
            window.open(project.link, "_blank", "noopener,noreferrer");
            return;
        }

        if (project.isPrivate) {
            setSnackBarMessage(project.walkthroughAvailable ? "This repository is private. Contact for walkthrough." : "This repository is private.");
        } else {
            setSnackBarMessage("Repository link is not available yet.");
        }

        setOpen(true);
    };

    const renderProjectMeta = (project: Project) => (
        <Box className="project-card-meta">
            <span>type: {project.type}</span>
            <span>visibility: {project.isPrivate ? "Private" : "Public"}</span>
            {project.year && <span>year: {project.year}</span>}
        </Box>
    );

    const renderProjectDetails = (project: Project) => (
        <Box className="project-card-details">
            {project.role && (
                <Typography sx={projectDetailTextStyle}>
                    <span style={textSpecStyle}>role:</span> {project.role}
                </Typography>
            )}
            {project.impact && (
                <Typography sx={projectDetailTextStyle}>
                    <span style={textSpecStyle}>impact:</span> {project.impact}
                </Typography>
            )}
            {!!project.architectureTags?.length && (
                <Box className="project-architecture-tags">
                    {project.architectureTags.map((tag) => (
                        <span className="project-architecture-tag" key={`${project.title}-${tag}`}>{tag}</span>
                    ))}
                </Box>
            )}
        </Box>
    );

    const renderProjectCard = (project: Project) => (
        <Card key={project.title} sx={cardContentStyle} className="project-card">
            <CardActionArea sx={cardActionStyle} onClick={() => openRepository(project)} className="terminal-focus-target">
                <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={`${project.title} preview`}
                    className="terminal-media"
                    sx={{ objectFit: "contain", backgroundColor: theme.palette.background.default, padding: "8px" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={headerStyle}>
                        {project.title}
                    </Typography>
                    {renderProjectMeta(project)}
                    <Box sx={skillBoxStyle}>
                        {project.skills.map((skill, index) => printSkills(skill, index, project.title))}
                    </Box>
                    <Typography variant="body2" sx={textStyle}>
                        {project.description}
                    </Typography>
                    {renderProjectDetails(project)}
                </CardContent>
            </CardActionArea>
            <Box className="project-card-actions">
                {!project.isPrivate && project.link && (
                    <Button
                        variant="outlined"
                        size="small"
                        className="terminal-focus-target"
                        sx={filterButtonStyle}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Repository
                    </Button>
                )}
                {project.isPrivate && (
                    <span className="project-private-badge">
                        {project.walkthroughAvailable ? "Private Repository • Walkthrough Available" : "Private Repository"}
                    </span>
                )}
            </Box>
        </Card>
    );

    const renderExplorerControls = () => (
        <Box className="project-explorer-controls">
            <Box className="project-explorer-group">
                <Typography sx={controlLabelStyle}>type</Typography>
                <Box className="project-filter-row">
                    {typeFilterOptions.map((option) => (
                        <Button
                            key={`type-${option}`}
                            variant="outlined"
                            sx={filterButtonStyle}
                            className={`terminal-focus-target project-filter-button${typeFilter === option ? " project-filter-button--active" : ""}`}
                            onClick={() => setTypeFilter(option)}
                        >
                            {option}
                        </Button>
                    ))}
                </Box>
            </Box>

            <Box className="project-explorer-group">
                <Typography sx={controlLabelStyle}>visibility</Typography>
                <Box className="project-filter-row">
                    {visibilityFilterOptions.map((option) => (
                        <Button
                            key={`visibility-${option}`}
                            variant="outlined"
                            sx={filterButtonStyle}
                            className={`terminal-focus-target project-filter-button${visibilityFilter === option ? " project-filter-button--active" : ""}`}
                            onClick={() => setVisibilityFilter(option)}
                        >
                            {option}
                        </Button>
                    ))}
                </Box>
            </Box>

            <Box className="project-explorer-group">
                <Typography sx={controlLabelStyle}>sort</Typography>
                <Box className="project-filter-row">
                    {sortOptions.map((option) => (
                        <Button
                            key={`sort-${option}`}
                            variant="outlined"
                            sx={filterButtonStyle}
                            className={`terminal-focus-target project-filter-button${sortMode === option ? " project-filter-button--active" : ""}`}
                            onClick={() => setSortMode(option)}
                        >
                            {option}
                        </Button>
                    ))}
                </Box>
            </Box>

            <Typography sx={controlLabelStyle}>{projectCountLabel}</Typography>
        </Box>
    );

    const renderEmptyState = () => (
        <Box className="terminal-output terminal-empty project-empty-state">
            <Typography sx={textStyle}>No projects match current filters.</Typography>
        </Box>
    );

    const renderProjectSection = (projectType: ProjectType) => {
        const projectsByType = filteredProjects.filter((project) => project.type === projectType);

        if (!projectsByType.length) {
            return null;
        }

        return (
            <React.Fragment key={projectType}>
                <Grid sx={{marginTop:"10px"}}>
                    <Typography sx={sectionHeaderStyle}>
                        <span style={styleSpecChar}>#</span>
                        <Typical
                            steps={[500,projectType.toLowerCase().replace(/\s+/g, "-"), 5000]}
                            loop={1}
                            wrapper="span"
                        />  
                    </Typography>
                </Grid>
                <Box sx={cardContainerStyle}>
                    {projectsByType.map((project) => renderProjectCard(project))}
                </Box>
            </React.Fragment>
        );
    };

    return (
        <>
            <Snackbar open={open} autoHideDuration={4500} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="error" sx={snackBarStyle} icon={<ErrorOutlineIcon sx={{color:theme.palette.text.primary}} />}>
                    <Typography variant="body2" sx={textStyle}>
                        {snackBarMessage}
                    </Typography>
                </Alert>
            </Snackbar>

            {renderExplorerControls()}

            {!filteredProjects.length && renderEmptyState()}

            {!ShowSections && filteredProjects.length > 0 &&
                <Box sx={cardContainerStyle}>
                    {filteredProjects.map((project) => renderProjectCard(project))}
                </Box>
            }

            {ShowSections && filteredProjects.length > 0 &&
                <>
                    {PROJECT_SECTION_ORDER.map((projectType) => renderProjectSection(projectType))}
                </>
            }
        </>
    );
};

export default ProjectCard;
