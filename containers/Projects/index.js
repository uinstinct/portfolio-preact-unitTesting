import constants from "./constants";
import Card from "./card";
import { showSwipeGuide } from "./cardMouseMovements";

export default function Projects() {

    let count = 1;
    const cards = constants.map((constant, idx) => {
        const { items } = constant;
        const sourceItems = items.map(item => {
            item["id"] = count++;
            return item;
        })
        return <Card key={idx} sourceItems={sourceItems} links={constant.links} stacks={constant.stacks} />
    });
    return (
        <div
            onPointerEnter={showSwipeGuide}
        >
            <h1 id="myProjects" className="container-header">My Projects</h1>
            {cards}
        </div>
    );
}