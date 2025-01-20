import {Club} from "./Club.jsx";

// Q2 : fct
export function League() {
    return (
        <>
            <div>League</div>

                    <div>
                        <Club id={1} name={"psg"} isLigue1={false}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png"
                                alt="psg logo"/>
                        </Club>
                        <Club id={2} name={"marseille"} isLigue1={52}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/68/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png"
                                alt="marseille logo"/>
                        </Club>
                        <Club id={3} name={"lyon"} isLigue1={false}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/fr/thumb/0/0e/Olympique_lyonnais_%28logo%29.svg/1200px-Olympique_lyonnais_%28logo%29.svg.png"
                                alt="lyon logo"/>
                        </Club>
                    </div>
        </>
    )
}
