import './Searchs.scss';
import ControlledCarousel from "./hashtag/Hashtag";
import Hashtag from "./hashtag/Hashtag";
import React from 'react';
import Search2 from './Search_bar/searchbar';

function Search() {

    const data = [/*{chaine}, {profil}, {hashtag}, {video},*/"Chocolat", "Chien", "chat", "Café", "Cafeine"];

    const [value, setvalue] = useState("  ");

    function handleChange(event) {
        setvalue(event.target.value)
    }

    return (

        <header className="body">

            <nav className="recherche">
                <div className="Navsearch">

                    <a className="logo" href=" " rel="">
                        <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" className="icon_title" width="100" />
                    </a>

                    <div className="search" action="submit">
                        <Search2 />
                    </div>

                    <div className="connect">

                        <a className="not" href="" target="" rel="">
                            <i class="fa-solid fa-bell fa-2x"></i>
                        </a>

                        <a className="pp" href="/connexion" target="" rel="">
                            <i class="fa-solid fa-user fa-2x"></i>
                        </a>
                    </div>

                </div>

                <div className="Navid">
                    {Hashtag}
                    <ControlledCarousel />

                </div>

            </nav>

        </header>
    );
}

export default Search;
