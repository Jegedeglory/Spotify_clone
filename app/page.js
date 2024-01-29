"use client";

import Image from "next/image";
import styles from "./page.module.css";

import useSound from "use-sound";
import More from "../compo/More";
import HomeIcon from "../compo/HomeIcon";
import Search from "../compo/Search";
import Library from "../compo/Library";
import Side from "../compo/Side";
import Profile from "../compo/Profile";
import Shuffle from "../compo/Shuffle";
import Volume from "../compo/Volume";
import Phone from "../compo/Phone";
import Heart from "../compo/Heart";
import Time from "../compo/Time.js";
import HeartIcon from "../compo/HeartIcon";
import Vector from "../compo/Vector";
import Next from "../compo/Next";
import Prev from "../compo/Prev";
import Play from "../compo/Play";
import Pause from "../compo/Pause";
import Group from "../compo/Group.js";
import Group5 from "../compo/Group5";
import Download from "../compo/Download";
import Add from "../compo/Add";
import Down from "../compo/Down";
import Black from "../compo/Black";
import PauseButton from "../compo/PauseButton";
import PlayPause from "../compo/PlayPause";
import MuteUnmute from "../compo/Mute_unmute";
import Favorite from "../compo/Favorite";
import PhoneToggle from "../compo/PhoneToggle";
import Group5Toggle from "../compo/Group5Toggle";
import VectorToggle from "../compo/VectorToggle";
import GroupToggle from "../compo/GroupToggle";
import ShuffleToggle from "../compo/ShuffleToggle";

export default function Home() {
	return (
		<main>
			<nav className="sidebar">
				<div className="sidebar-top-wrapper">
					<div className="sidebar_top">
						<a href="#More" className="Spotify_logo">
							<More />
						</a>
					</div>
					<ul className="ul">
						<li>
							<a href="#home" title="Home" className="tooltip homekey">
								<HomeIcon />
								Home
							</a>
						</li>
						<li>
							<a href="#search" title="Search" className="tooltip search">
								<Search />
								Search
							</a>
						</li>
						<li>
							<a href="#library" title="Library" className="tooltip library">
								<Library />
								Your Library
							</a>
						</li>
						<div className="playlist_items">
							<li>
								<a href="#add" title="add" className="tooltip add">
									<div className="add_image">
										<Add />
									</div>
									create playlist
								</a>
							</li>
							<li>
								<a href="#heart" title="Heart" className="tooltip liked">
									<div className="liked_image">
										<HeartIcon />
									</div>
									Liked Songs
								</a>
							</li>
						</div>

						<div className="lower_items">
							<li>
								<a
									href="#old_skool"
									title="old_skool"
									className="tooltip old_skool"
								>
									[trips to SA]
								</a>
							</li>
							<li>
								<a href="#feature" title="feature" className="tooltip feature">
									Featuring Burna
								</a>
							</li>
							<li>
								<a href="#dime" title="Dime" className="tooltip Dime">
									Love Dont Cost A Dime
								</a>
							</li>
							<li>
								<a href="#chill" title="chill" className="tooltip chill">
									Chill Your Mind
								</a>
							</li>
							<li>
								<a href="#party" title="party" className="tooltip party">
									Party Dey!
								</a>
							</li>
							<li>
								<a
									href="#old_skool"
									title="old_skool"
									className="tooltip old_skool"
								>
									Afro Throwback
								</a>
							</li>
						</div>
					</ul>
				</div>
				<div className="wakanda_div">
					<div className="profile">
						<div className="change">
							<Side />
						</div>
						<div className="change1">
							<Side />
						</div>
					</div>
					<div className="Profile_jegs">
						<Profile />
						<p>Jegs</p>
						<Down />
					</div>
					<div className="wakanda">
						<img src="/Wakanda.png" alt="Wakanda" className="Waknda_frver" />
					</div>
					<div className="wakanda_items">
						<p className="album">Album</p>
						<h2 className="album_type">
							Black Panther: Wakanda Forever- Music From and Inspired By{" "}
						</h2>
						<div className="various_artist">
							<ul className="v_artists">
								<div className="eclipse">
									<Black />
								</div>
								<li className="li_v_artist V_artistry">Various Artists</li>
								<li className="li_v_artist">2022</li>
								<li className="li_v_artist">19 songs,</li>
							</ul>
							<p className="li_v_artist hrs">1 hr 2 mins</p>
						</div>
					</div>
				</div>
				<div className="playlist_menu">
					<img src="/Wakanda.png" alt="Mendes" className="Mendes_img" />
					<ul className="ul_down">
						<li>Alone</li>
						<li className="mendes">Burna Boy</li>
					</ul>
					<div className="menu_data">
						<ShuffleToggle />
						<Next />
						<div className="pause">
						<PauseButton />
						</div>
						<Prev />
						<GroupToggle />
					</div>

					<div className="Menu_data">
						<VectorToggle />
						<Group5Toggle />
						<PhoneToggle />
						<MuteUnmute />
						<div className="Menu_components volumebar"></div>
					</div>
					<div className="Menu_components playing_continues">
						<div className="Menu_components playing"></div>
					</div>
				</div>
				<div className="playOn_option">
					<div className="play_background">
						<PlayPause />
					</div>
						<Favorite />
						<Download />
						<div className="more_menu">
							<More />
						</div>
				</div>
				<div className="Title_line">
					<div className="title">
						<ul className="title_list">
							<li className="title_words">#</li>
							<li className="title_words">Title</li>
						</ul>
						<hr className="linne" />
					</div>
					<div className="title">
						<div className="play_s">
							<div className="title_time">
								<Time />
							</div>
							<li className="title_wordss">Plays </li>
						</div>
					</div>
					<div className="playing_songs">
						<ol className="songsLists">
							<div className="song_listed">
                                <li className="song_list">
								Lift Me Up <div className="extra_word">29,670,510</div>
								<div className="extra_time_word">3:30</div>
								<p className="artists_song">Rihana</p>
							</li>
                                </div>
                                <div className="song_listed">
							<li className="song_list">
								Love & Loyalty (Believe)
								<div className="extra_time_word">3:30</div>
								<p className="artists_song">
									DBN Gogo, Sino Msolo, Kamo Mpala, Young Stunna, Busiswa
								</p>
							</li>
                             </div>
                             <div className="song_listed">
							<li className="song_list green_house">
								Alone<div className="extra_time_word">3:30</div>
								<p className="artists_song">Burnaboy</p>
							</li>
                            </div>
                            <div className="song_listed">
							<li className="song_list">
								No Woman No Cry<div className="extra_word">4,390,517</div>
								<div className="extra_time_word">3:30</div>
								<p className="artists_song">Bob Marley</p>
							</li>
                            </div>
                            <div className="song_listed">
							<li className="song_list">
								Arboles Bajo El Mar
								<p className="artists_song">Vivir Quintana, Mare Advertencia</p>
							</li>
                            </div>
						</ol>
					</div>
				</div>
			</nav>
		</main>
	);
}
