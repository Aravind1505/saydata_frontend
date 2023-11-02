"use client";

import { BsBookmark } from "react-icons/bs";
import { SlFolder } from "react-icons/sl";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function convertToText() {

}

function DropDownLanguage() {

    const options = [
        'English', 'Hindi', 'German'
    ];
    const defaultOption = options[0];

    return (
        <Dropdown options={options} onChange={"sadas"} value={defaultOption} placeholder="Select an option" />
    );
}

const UploadModal = (props) => {
    if (props.isVisible == false) return null;

    const handleClose = (e) => {
        if (e.target.id === "modal-blur") {
            props.onClose();
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center " id="modal-blur" onClick={handleClose}>
            <div className="bg-white w-7/12 h-7/12 opacity-100 flex flex-col text-black rounded-md p-10 gap-y-7">

                <div className="flex flex-row justify-between">
                    <div className="font-bold text-xl"> Transcribe File </div>
                    <button className="text-lg" onClick={() => props.onClose()}>X</button>
                </div>
                <div className="flex flex-col gap-y-3">
                    <div>Transcription Language</div>
                    <DropDownLanguage />
                </div>

                <button className="flex flex-col gap-y-4 p-10 justify-center items-center rounded-md border-body-border border-2">
                    <div className="bg-select-button-color rounded-full p-5">
                        <AiOutlineCloudUpload className=" text-dark-blue-theme" size="30" />
                    </div>
                    <div><x className="text-dark-blue-theme font-bold">Click to upload</x> or drag and drop</div>
                    <div>
                        <div className="text-sm items-center flex flex-col justify-center">
                            The maximum file size is 1GB for audio and 10GB for videos.
                        </div>
                        <div className="text-sm">
                            Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov, wmv, wma
                        </div>
                    </div>
                </button>

                <div className="flex flex-col gap-y-3">
                    <div>Import from Link</div>
                    <input className="rounded-md border-body-border border-2 p-3" placeholder="Place a Dropbox, Google Drive or a Youtube URL here." type="text"></input>
                </div>

                <div className="flex flex-row gap-x-3 items-center">
                    <input type="checkbox" className="rounded-full w-4 h-4" />
                    <div>Speaker identification</div>
                </div>

                <button className="bg-dark-blue-theme rounded-md flex p-4 text-white text-xl items-center justify-center" data-modal-target="default-modal" data-modal-toggle="default-modal" role="button" >
                    Transcribe File
                </button>
            </div>
        </div>
    );
}

function TopUser() {

    const [showModal, setShowModal] = useState(false);

    return (<div className="w-full flex flex-row  justify-between items-center">
        <div className="flex flex-col gap-y-2">
            <div className="text-2xl font-bold">Welcome Aravind</div>
            <div className="text-slate-700">Upload your Audio and Video to convert to text</div>
        </div>
        <button className="bg-dark-blue-theme rounded-md flex p-4 text-white text-xl" data-modal-target="default-modal" data-modal-toggle="default-modal" role="button" onClick={() => setShowModal(true)}>
            Transcribe File
        </button>
        <UploadModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
    );
}

function DashboardUser() {

    const data = [
        { icon: <SlFolder />, metric: "Uploaded Files", count: 100 },
        { icon: <Image src="/T-Letter.png" width="14" height="14" alt="T-img"></Image>, metric: "Transcribed", count: 50 },
        { icon: <BsBookmark />, metric: "Saved", count: 20 }
    ];

    return (
        <div className=" w-fullflex flex-row ">
            <ul className="flex flex-row justify-between w-full">
                {data.map((e, i) => (
                    <div key={i} className=" w-96 rounded-md border-body-border border-2 flex flex-col p-4 bg-white gap-y-2">
                        <div className="p-4 rounded-full border-body-border border-2 w-fit">{e.icon}</div>
                        <div>{e.count}</div>
                        <div>{e.metric}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

function RecentFiles() {
    return (
        <div className="bg-white p-5 h-full flex flex-col gap-y-2">
            <div className="text-lg font-bold">Recent Files</div>
            <hr className="border-body-border w-full mb-2"></hr>
            <table className="table-fixed">
                <thead className="bg-select-button-color">
                    <tr className="">
                        <th className="py-3.5"><input className="w-4 h-4" type="checkbox"></input></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Duration</th>
                        <th>Date Created</th>
                        <th>Last Updated</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}

export default function UserBoard() {
    return (
        <div className="bg-body-bg h-full p-10 gap-y-8 flex flex-col">
            <TopUser />
            <DashboardUser />
            <RecentFiles />
        </div>
    );
}