import styled from "styled-components";
import kenyaimage from '../img.jpeg';

const Frame = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.41);
-webkit-box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.41);
-moz-box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.41);
border-radius: 10px;
`;

const FrameContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const FrameBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
`

const FrameImg = styled.img`
     width: 250px;
    height: 100%;
    object-fit: cover;
`;

const CardConatiner = styled.div`
    display: grid;
    grid-template-columns: 575px 575px;
    grid-gap: 20px;
`;

const CardButton = styled.button`
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    border: 2px solid #a30b0b;
    width: 100%;
`

const CardButtonPrimary = styled(CardButton)`
    color: #fff;
    background-color: #bb0d0d;
    :hover {
        color: #bb0d0d;
        background-color: white;
    }
`;

const PackageCard = () => {
    return (
        <Frame>
            <FrameImg src={kenyaimage} alt=""></FrameImg>
            <FrameContent>
                <h3>
                    Classic Safari Shaba Game Reserve - Samburu National Reserve - Nakuru - Lake Nakuru National Park
                </h3>
                <p>5 Nights / 6 Days</p>

                <p>Transport   Transfers Date Company Pick Up Drop Off Time Vehicle     Jomo Kenyatta International Airport Sarova Shaba Game Lodge   Transfer</p>
                <FrameBtnContainer>
                    <CardButtonPrimary>View Details</CardButtonPrimary>
                    <CardButtonPrimary>Send Enquiry</CardButtonPrimary>
                </FrameBtnContainer>
            </FrameContent>
        </Frame>
    )
}

const GptContainer = styled.div`
    padding: 30px;
`

const GptOutputSection = () => {
    return (
        <GptContainer>
            <h2>Kenya is a beautiful country with plenty of amazing destinations to explore. Here's a suggested itinerary for a 5-night/6-day trip:</h2>

            <h3>Day 1: Arrival in Nairobi</h3>
            <p>Upon your arrival at Jomo Kenyatta International Airport in Nairobi, you will be met by a representative from your tour company and transferred to your hotel. Depending on your arrival time, you may have the opportunity to do some sightseeing around the city, such as visiting the Nairobi National Museum or the David Sheldrick Elephant Orphanage. In the evening, enjoy dinner at a local restaurant.</p>

            <h3>Day 2: Nairobi to Amboseli National Park</h3>
            <p>After breakfast, depart for Amboseli National Park, located approximately 4 hours from Nairobi. Amboseli is known for its large herds of elephants and stunning views of Mount Kilimanjaro. After lunch at your lodge, take an afternoon game drive in the park, then return to your lodge for dinner and overnight.</p>

            <h3>Day 3: Amboseli National Park</h3>
            <p>Spend a full day in Amboseli, taking morning and afternoon game drives in search of the park's resident wildlife. In addition to elephants, Amboseli is home to lions, cheetahs, giraffes, zebras, and more. Return to your lodge for meals and relaxation between game drives.</p>

            <h3>Day 4: Amboseli to Maasai Mara National Reserve</h3>
            <p>After breakfast, depart for the Maasai Mara National Reserve, located approximately 6 hours from Amboseli. The Maasai Mara is known for its large concentrations of wildlife, particularly during the annual wildebeest migration. Arrive in time for lunch at your lodge, then take an afternoon game drive in the reserve. Return to your lodge for dinner and overnight.</p>

            <h3>Day 5: Maasai Mara National Reserve</h3>
            <p>Spend a full day in the Maasai Mara, taking morning and afternoon game drives. This is an excellent opportunity to see the "Big Five" (elephants, lions, leopards, buffalo, and rhinos) as well as numerous other species. You may also have the opportunity to visit a Maasai village to learn about their culture and traditions. Return to your lodge for meals and relaxation between game drives.</p>

            <h3>Day 6: Maasai Mara to Nairobi</h3>
            <p>After breakfast, depart for Nairobi, stopping en route for lunch. Upon arrival in Nairobi, you can choose to visit some of the city's markets for souvenirs or simply relax at your hotel. In the evening, enjoy a farewell dinner at a local restaurant before being transferred to Jomo Kenyatta International Airport for your departure flight.</p>

            <p>This itinerary provides a good mix of wildlife viewing, cultural experiences, and relaxation. Of course, it can be customized to suit your interests and preferences. Don't hesitate to discuss any specific requests with your tour company to create a truly unforgettable trip.</p>
        </GptContainer>
    )
}

interface IPackagesProps{
    ref: React.Ref<HTMLDivElement>
};

export const PackageBannerSection = (props: IPackagesProps) => {
    return (
        <div ref={props.ref}>
            <GptOutputSection />
            <h2>Here are some of the most popular package options offered by ED-WINGS to consider for your 5-night/6-day trip to Kenya.</h2>
            <CardConatiner>
                <PackageCard />
                <PackageCard />
                <PackageCard />
                <PackageCard />
            </CardConatiner>
            <div>
                <h2>Not satified with our results? Try refining your query below or get in touch with our agents today!</h2>
                <CardButtonPrimary>Send Enquiry</CardButtonPrimary>
            </div>
        </div>
    );
};
