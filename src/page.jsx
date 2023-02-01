import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaLaravel, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaCpanel, FaDigitalOcean } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { MdOutlineContactPage, MdLanguage, MdOutlineEmail } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs, SiPostgresql, SiFirebase, SiGodotengine } from 'react-icons/si';
import { CgCloud } from 'react-icons/cg';

// IMGS
import PDF from './assets/CV_2022_lite_eng.pdf'
import IMG1 from './assets/img/portfolio-1.jpg'
import IMG2 from './assets/img/portfolio-2.jpg'
import IMG3 from './assets/img/portfolio-3.jpg'
import IMG4 from './assets/img/portfolio-4.jpg'
import IMG5 from './assets/img/portfolio-5.jpg'
import IMG6 from './assets/img/portfolio-6.jpg'
import IMG7 from './assets/img/portfolio-7.png'

let title = () => <header class="masthead d-flex align-items-center">
    <div class="container px-4 px-lg-5 text-center text-light">
        <h1 class="mb-1">DEVELOPER NATRIANA</h1>
        <h3 class="mb-5"><em>Portfolio Page</em></h3>
    </div>
</header>

let resume = () => <section class="content-section bg-light" id="resume">
    <div class="container px-4 px-lg-5 text-center">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-10">
                <h2>Developer Nestor Triana</h2>
                <p class="lead mb-5 text-justify">
                    Something little about me, I am a very curious person, that is always looking for ways to create
                    and develop concepts, ideas,
                    systems, I like to understand them, their methods and being able
                    upgrade them and create new ones.
                    With software development I am able to apply this knowledge into
                    my passion. I am open to work in
                    groups, being proactive with my work, and give and receive advice,
                    always open to learn more from
                    others.
                </p>
                <a class="btn btn-secondary btn-lg" href={PDF} download><MdOutlineContactPage style={{ fontSize: '1.3em', marginBottom: '8px' }} /> DOWNLOAD CV</a>
            </div>
        </div>
    </div>
</section>

let skills = () => <section class="content-section bg-primary text-white text-center" id="skills">
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading">
            <h3 class="text-secondary mb-0">Skill sets</h3>
            <h2 class="mb-5">Acquired knowledge, used in professional environments</h2>
        </div>

        <div class="content-section-heading">
            <h3 class="mb-4">Programming Languages</h3>
        </div>

        <div class="row gx-4 gx-lg-5 mb-4">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3"><IoLogoJavascript style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>JavaScript</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaHtml5 style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>HTML5</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaCss3Alt style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>CSS</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaPhp style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>PHP</strong></h4>
            </div>

        </div>

        <div class="content-section-heading">
            <h3 class="my-4">Frameworks</h3>
        </div>


        <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaReact style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>React</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaNodeJs style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Node JS</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><SiNextdotjs style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Next js 13</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaLaravel style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Lavarel</strong></h4>
            </div>
        </div>

        <div class="content-section-heading">
            <h3 class="my-4">Databases</h3>
        </div>

        <div class="row gx-4 gx-lg-5 mb-4">
            <div class="col-lg-6 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><GrMysql style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>MySQL</strong></h4>
            </div>
            <div class="col-lg-6 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><SiPostgresql style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>PostgresSQL</strong></h4>
            </div>
        </div>

        <div class="content-section-heading">
            <h3 class="my-4">Tools & Others</h3>
        </div>

        <div class="row gx-4 gx-lg-5 mb-4">
            <div class="col-lg-6 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaGitAlt style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Git</strong></h4>
            </div>
            <div class="col-lg-6 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><SiGodotengine style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Godot</strong></h4>
            </div>
        </div>

        <div class="content-section-heading">
            <h3 class="my-4">Cloud Providers</h3>
        </div>
        <div class="row gx-4 gx-lg-5 mb-4">
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaCpanel style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Cpanel</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><SiFirebase style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Firebase</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><CgCloud style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>G Cloud</strong></h4>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaDigitalOcean style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Digital Ocean</strong></h4>
            </div>
        </div>

        <div class="content-section-heading">
            <h3 class="my-4">Spoken languages</h3>
        </div>

        <div class="row gx-4 gx-lg-5 mb-4">
            <div class="col-lg-3 col-md-6">
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><MdLanguage style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>English</strong></h4>
                <p class="text-faded mb-0">Bilingual Level, B2/C1</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><MdLanguage style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Spanish</strong></h4>
                <p class="text-faded mb-0">Native language</p>
            </div>
        </div>

    </div>
</section>

let works = () => <section class="content-section" id="works">
    <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Portfolio</h3>
            <h2 class="mb-5">Profesional & Personal Projects</h2>
        </div>
        <div class="row gx-0">

            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Curaduria 1 Bucaramanga</div>
                            <div class="h2"><a className='text-secondary' href='https://www.curaduria1bucaramanga.com/' target={'_blank'}>Live Link</a></div>
                            <p class="mb-0">Government institution for the management of urban development of the city</p>
                            <p class="mb-0 text-bold">Technologies: React JS front end, Node JS back End, MySQL DB</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG1} alt="..." />
                </a>
            </div>
            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Pokemon Ledger</div>
                            <div class="h2"><a className='text-secondary' href='https://next13-pktapp.vercel.app' target={'_blank'}>Live Link</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/next13-pktapp' target={'_blank'}>Repository</a></div>
                            <p class="mb-0">Listing page and info page for all Pokemon</p>
                            <p class="mb-0 text-bold">Technologies: Next 13 Framework, PokeAPI V2</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG2} alt="..." />
                </a>
            </div>
            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                            <div class="h2">CORBAN - Curadurias</div>
                            <div class="h2"><a className='text-secondary' href='https://curaduria-1-bucaramanga.web.app/home' target={'_blank'}>Live Link</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/Corban_frontend' target={'_blank'}>Repository Front end</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/corban_server' target={'_blank'}>Repository Back End</a></div>
                            <p class="mb-0">V2.0 of CORBAN, management software for the Curatorships </p>
                            <p class="mb-0 text-bold">Technologies: React JS front end, Node JS back End, MySQL DB</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG3} alt="..." />
                </a>
            </div>
            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                            <div class="h2">ARQ. Jose Triana</div>
                            <div class="h2"><a className='text-secondary' href='https://www.arq-jdtriana.com/' target={'_blank'}>Live Link</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/Arq-JDT' target={'_blank'}>Repository</a></div>
                            <p class="mb-0">Portfolio Page</p>
                            <p class="mb-0 text-bold">Technologies: React JS</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG4} alt="..." />
                </a>
            </div>
            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                            <div class="h2">Fruver AMB</div>
                            <div class="h2"><a className='text-secondary' href='http://www.fruveramb.com/' target={'_blank'}>Live Link</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/Fruver-AMB-Express' target={'_blank'}>Repository</a></div>
                            <p class="mb-0">Grosery online store</p>
                            <p class="mb-0 text-bold">Technologies: Lavarel + VueJS, PostrgesSQL</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG5} alt="..." />
                </a>
            </div>
            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                        <div class="h2">Elementa - Game</div>
                            <div class="h2"><a className='text-secondary' href='https://neoygdrassyl.itch.io/elementa' target={'_blank'}>Live Link</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/Elementa-Game' target={'_blank'}>Repository</a></div>
                            <p class="mb-0">Videogame in the browser</p>
                            <p class="mb-0 text-bold">Technologies: Godot</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG6} alt="..." />
                </a>
            </div>
            <div class="col-lg-4">
                <a class="portfolio-item" href="#!">
                    <div class="caption">
                        <div class="caption-content">
                        <div class="h2">STEAM - sales tracker</div>
                            <div class="h2"><a className='text-secondary' href='https://xix84i.deta.dev/tracker/' target={'_blank'}>Live Link</a></div>
                            <div class="h2"><a className='text-secondary' href='https://github.com/neoygdrassyl/steam-sales-tracker/tree/main' target={'_blank'}>Repository</a></div>
                            <p class="mb-0">Steam sales tracker list</p>
                            <p class="mb-0 text-bold">Technologies: Python, FAST API</p>
                        </div>
                    </div>
                    <img class="img-fluid" src={IMG7} alt="..." />
                </a>
            </div>
        </div>
    </div>
</section>


let contact = () => <footer class="footer text-center content-section bg-primary text-white text-center" id="contact">
    <div class="container px-4 px-lg-5">
        <h3 class="text-secondary mb-0">Contact information</h3>
        <h2 class="mb-5">Other methods for contacting and information</h2>
        <div class="row gx-4 gx-lg-5 mb-4">
            <div class="col-lg-4 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaLinkedin style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Linkedin Profile</strong></h4>
                <a href='https://www.linkedin.com/in/eng-nestor-triana/' target={'_blank'} class="text-faded mb-0">Go to</a>
            </div>
            <div class="col-lg-4 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><FaGithub style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Github Profile</strong></h4>
                <a href='https://github.com/neoygdrassyl' target={'_blank'} class="text-faded mb-0">Go to</a>
            </div>
            <div class="col-lg-4 col-md-6">
                <span class="service-icon rounded-circle mx-auto mb-3"><MdOutlineEmail style={{ fontSize: '2em', marginBottom: '8px' }} /></span>
                <h4><strong>Contact Email</strong></h4>
                <p class="text-faded mb-0">ing.natriana@gmail.com</p>
            </div>
        </div>
        <p class="small mb-0">Developed and Programmed by Nestor Triana 2023</p>
        <p class="small mb-0">Title Foto by <a className='text-secondary' href="https://unsplash.com/@hishahadat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shahadat Rahman</a> at <a className='text-secondary' href="https://unsplash.com/es/s/fotos/programming-wallpaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        <p class="small mb-0">Page Template by <a className='text-secondary' href="https://startbootstrap.com/">StartBootstrap</a> at <a className='text-secondary' href="https://github.com/startbootstrap/startbootstrap-stylish-portfolio">Github</a></p>

    </div>
</footer>

export default function Page() {
    return <>
        {title()}
        {resume()}
        {skills()}
        {works()}
        {contact()}
    </>
}