import { createContext } from "react";

import TickrType from "../types/TickrType";

const WatchListContext = createContext<TickrType[] | []>([]);

export default WatchListContext;
