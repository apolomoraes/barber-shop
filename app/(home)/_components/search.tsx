"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return ( 
    <div className="flex items-center gap-2">
      <Input placeholder="Busque por uma barbearia..."/>
      <Button variant="default">
        <SearchIcon size={20}/>
      </Button>
    </div>
  );
}
 
export default Search;

// https://c004.novisurvey.net/ViewReport.aspx?doid=1030e268493c46e48b096a6d6534e6c6&c=pt-BR&re=186fb46371014df9bc5b9a1d6c593097