import React from 'react'
import { useState } from 'react';

const Hookers = () => {
    const names =[ " John", "Jane","Bob", "Alice"];
    const nameToFind = "Jane";
    const foundName= (names,nameToFind)
    console.log(foundName)
    return (
    <div>
       {foundName}
    </div>
  )
}

export default Hookers