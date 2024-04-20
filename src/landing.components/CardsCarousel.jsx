import styled from "styled-components";

export default function CardsCarousel() {
    return (
        <Div>
            <ul className="carousel__list">
                <li className="carousel__item" data-pos="-2">
                    1
                </li>
                <li className="carousel__item" data-pos="-1">
                    2
                </li>
                <li className="carousel__item" data-pos="0">
                    3
                </li>
                <li className="carousel__item" data-pos="1">
                    4
                </li>
                <li className="carousel__item" data-pos="2">
                    5
                </li>
            </ul>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    font-family: Arial;

    & .carousel__list {
        display: flex;
        list-style: none;
        position: relative;
        width: 100%;
        height: 300px;
        justify-content: center;
        perspective: 300px;
    }

    & .carousel__item {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0px;
        width: 150px;
        height: 250px;
        border-radius: 12px;
        box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
        position: absolute;
        transition: all 0.3s ease-in;

        &:nth-child(1) {
            background: linear-gradient(45deg, #2d35eb 0%, #904ed4 100%);
        }
        &:nth-child(2) {
            background: linear-gradient(45deg, #2d35eb 0%, #fdbb2d 100%);
        }
        &:nth-child(3) {
            background: linear-gradient(45deg, #2d35eb 0%, #22c1c3 100%);
        }
        &:nth-child(4) {
            background: linear-gradient(45deg, #fdbb2d 0%, #904ed4 100%);
        }
        &:nth-child(5) {
            background: linear-gradient(45deg, #22c1c3 0%, #904ed4 100%);
        }

        &[data-pos="0"] {
            z-index: 5;
        }

        &[data-pos="-1"],
        &[data-pos="1"] {
            opacity: 0.7;
            filter: blur(1px) grayscale(10%);
        }

        &[data-pos="-1"] {
            transform: translateX(-40%) scale(0.9);
            z-index: 4;
        }

        &[data-pos="1"] {
            transform: translateX(40%) scale(0.9);
            z-index: 4;
        }

        &[data-pos="-2"],
        &[data-pos="2"] {
            opacity: 0.4;
            filter: blur(3px) grayscale(20%);
        }

        &[data-pos="-2"] {
            transform: translateX(-70%) scale(0.8);
            z-index: 3;
        }

        &[data-pos="2"] {
            transform: translateX(70%) scale(0.8);
            z-index: 3;
        }
    }
`;
