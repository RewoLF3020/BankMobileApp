import React, { useState } from "react";
import { IContact } from "./types";

export const useContacts = () => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    return {contacts, isLoading};
}