import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { GlobalContext } from './GlobalContext';
const divStyle = {

    color: 'blue',
  
    backgroundColor: 'lightgray',
  
  };


const HomeScreen = () => {
  const { items } = useContext(GlobalContext);
  return (
    <div className="homeScreen">
      <div className="homeScreenContainer">
        <div className="page_header">
          <div class="logo">
            <img src="Assets/Oreo.png" alt="" />
          </div>
        </div>
        <div className="product">
                {items.map((item) => (
                  <div className="productContainer">
                   <div className="productBox">
                   <div className="productimage">
                    <div className="productimage" key={item.id}>
                      <div className="points">
                      <div className="oreo"><img src={item.cookies}/></div>
                      <div><span>{item.points}</span></div>
                      </div>
                     <div className="center-img"><img src={item.image} className="imagecenter" /></div>
                        
                    </div>
                    </div>
                    </div>
                    <p className="productName">{item.description}</p> 
                    </div>
                ))}
        </div>

        {/* <nav class="tab-bar">
	<ul class="tab-bar__tabs">
		<li class="tab-bar__tab">
			<a class="tab-bar__tab-link" href="#home" aria-current="page">
				<svg class="tab-bar__tab-icon tab-bar__tab-icon--home" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
					<g class="tab-bar__tab-icon-1" fill="var(--focus-t)" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
						<polygon points="12 1,23 10,23 23,16 23,16 14,8 14,8 23,1 23,1 10" />
					</g>
				</svg>
				<span class="tab-bar__tab-name">Home</span>
			</a>
		</li>
		<li class="tab-bar__tab">
			<a class="tab-bar__tab-link" href="#videos">
				<svg class="tab-bar__tab-icon tab-bar__tab-icon--videos" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
					<g fill="var(--focus-t)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<line class="tab-bar__tab-icon-1" x1="3" y1="1" x2="21" y2="1" />
						<line x1="2" y1="5" x2="22" y2="5" />
						<g class="tab-bar__tab-icon-2" transform="translate(1,9)">
							<polygon points="9 3,15 7.5,9 11" />
							<rect rx="2" ry="2" width="22" height="14" />
							<polygon class="tab-bar__tab-icon-3" opacity="0" points="9 3,15 7.5,9 11" />
						</g>
					</g>
				</svg>
				<span class="tab-bar__tab-name">Videos</span>
			</a>
		</li>
		<li class="tab-bar__tab">
			<a class="tab-bar__tab-link" href="#books">
				<svg class="tab-bar__tab-icon tab-bar__tab-icon--books" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
					<g class="tab-bar__tab-icon-1" fill="var(--focus-t)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect class="tab-bar__tab-icon-2" x="1" y="1" rx="2" ry="2" width="11" height="19" />
						<rect class="tab-bar__tab-icon-3" x="12" y="1" rx="2" ry="2" width="11" height="19" />
						<line x1="12" y1="21" x2="12" y2="23" />
					</g>
				</svg>
				<span class="tab-bar__tab-name">Books</span>
			</a>
		</li>
		<li class="tab-bar__tab">
			<a class="tab-bar__tab-link" href="#profile">
				<svg class="tab-bar__tab-icon tab-bar__tab-icon--profile" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
					<g fill="var(--focus-t)" stroke="currentColor" stroke-width="2">
						<circle class="tab-bar__tab-icon-1" cx="12" cy="6.5" r="5.5"/>
						<path d="M20.473,23H3.003c-1.276,0-2.228-1.175-1.957-2.422,.705-3.239,3.029-8.578,10.693-8.578s9.987,5.336,10.692,8.575c.272,1.248-.681,2.425-1.959,2.425Z"/>
					</g>
				</svg>
				<span class="tab-bar__tab-name">Profile</span>
			</a>
		</li>
	</ul>
</nav> */}
        <Link to={"/login"}>
        <CustomButton text="Click me"/>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
