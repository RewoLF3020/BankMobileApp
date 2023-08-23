import Rect, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { IMessage } from "./types";
import { db } from "../../../firebase";
import dayjs from "dayjs";

export const useMessages = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => onSnapshot(query(collection(db, 'messages'),
        orderBy('timestamp', 'asc')), snapshot => {
            const msgs = 
                snapshot.docs.map(
                    d => d.data()?.timestamp ? ({
                        _id: d.id,
                        ...d.data(),
                        timestamp: dayjs.unix(d.data()?.timestamp.seconds).format('HH:mm')
                    } as IMessage) : ({
                        _id: d.id,
                        ...d.data(),
                    } as IMessage)
                );
            setMessages(msgs);

    }), []);

    return { messages };
}