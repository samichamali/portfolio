import "../../CSS/App.css";
import "../../CSS/FirstPart.css";
import "../../CSS/CompaniesList.css";
import InfiniteMenu from '../../Packages/InfiniteMenu/InfiniteMenu'

const items = [
    {
        image: 'Images/Barmej.png',
        link: 'https://barmej.net/',
        title: 'Barmej',
        description: "A Collaboration Based Tech Startup, also based in both Dubai and Berlin."
    },
    {
        image: 'Images/mundm.png',
        link: 'https://mundmfahrschule.de',
        title: 'M&M\nFarhschule',
        description: 'A German Driving School in Berlin.'
    },
    {
        image: 'Images/linguagpt.svg',
        link: 'https://linguagpt.com/',
        title: 'LinguaGPT',
        description: "A British AI Platform."
    },
    {
        image: 'Images/abarchitektur.png',
        link: 'https://www.ab-architektur-berlin.de/',
        title: 'AB\nArchitektur',
        description: "An Architecture Firm Present in Berlin."
    },
];


function CompaniesList() {
    return (
        <div className="companieslist">
            <InfiniteMenu items={items}/>
        </div>
    );
}

export default CompaniesList;
