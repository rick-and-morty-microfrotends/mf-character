import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./CharacterDetails.css";
import { getCharacterById } from "@rick-and-morty/api";

export const CharacterDetails = () => {

    const [character, setCharacter] = useState({});

    const { characterId } = useParams();

    useEffect(() => {
        getCharacterById(characterId).then(setCharacter);
    }, [characterId])

    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <img src={character.image} />
                    <span className="name mt-3">{character.name}</span>
                    <span className="idd">{character.species}</span>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                        <span className="idd1">{character.gender}</span>
                        <span>
                            <i className="fa fa-copy"></i>
                        </span>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="status">
                            <div className={"status-circle " + character.status}></div>
                            <span className="status-label">{character.status}</span>
                        </span>
                    </div>
                    <div className="text mt-3">
                        <p className='location'>{character.location && character.location.name}</p>
                    </div>
                    <div className=" px-2 rounded mt-4 date ">
                        <span className="join">{character.created}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
