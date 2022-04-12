import React, {useState, useEffect} from "react";

export const useOpenClose = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      }

    return {toggleModal, isModalOpen}

}