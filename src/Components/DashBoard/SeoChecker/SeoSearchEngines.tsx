import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic1 from "../images/google.png";
import pic2 from "../images/Bing-3051/bing-logo.png";
import pic3 from "../images/yahoo.png";
import pic4 from "../images/youtube.png";
import pic5 from "../images/baidu.png";
import pic6 from "../images/7.png";
import pic7 from "../images/8.png";
const SeoSearchEngine = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Analyze base on which Search Engine (SE) </Title>

				<CardHold>
					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic1} />
							<Text>Google</Text>
						</Card>
					</MyLink>

					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic2} />
							<Text>Bing</Text>
						</Card>
					</MyLink>

					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic3} />
							<Text>Yahoo</Text>
						</Card>
					</MyLink>

					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic4} />
							<Text>YouTube</Text>
						</Card>
					</MyLink>

					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic5} />
							<Text>Baidu</Text>
						</Card>
					</MyLink>
					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic6} />
							<Text>Naver</Text>
						</Card>
					</MyLink>

					<MyLink to='/seochecker/search'>
						<Card>
							<Logo src={pic7} />
							<Text>Seznam</Text>
						</Card>
					</MyLink>
				</CardHold>
			</Wrapper>
		</Container>
	);
};

export default SeoSearchEngine;

const MyLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Text = styled.div`
	font-weight: 700;
	font-size: 20px;
`;

const Logo = styled.img`
	height: 80px;
	width: 80px;
	/* background-color: red; */
	margin-bottom: 10px;
`;

const Card = styled.div`
	height: 170px;
	width: 250px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	flex-direction: column;
	margin-bottom: 20px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const CardHold = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: center; */
	width: 100%;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
`;

const Container = styled.div`
	min-width: calc(100vw - 240px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	/* flex-direction: column; */
`;
