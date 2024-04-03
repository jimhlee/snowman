import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman';
import { it, expect } from "vitest";


import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";


// FIXME: fix test, use specific answer 'apple'
it('only allows max wrong', function () {

    const { container } = render(<Snowman />);

    expect(container.querySelector('img[alt="0"]')).toBeInTheDocument();

    // TODO: refactor to be more modular with template literal for btn val
    // must include list of letters to iterate over
    const buttonB = container.querySelector('button[value="b"]')
    const buttonC = container.querySelector('button[value="c"]')
    const buttonD = container.querySelector('button[value="d"]')
    const buttonF = container.querySelector('button[value="f"]')
    const buttonJ = container.querySelector('button[value="j"]')
    const buttonK = container.querySelector('button[value="k"]')
    const buttonG = container.querySelector('button[value="g"]')

    fireEvent.click(buttonB)
    fireEvent.click(buttonC)
    fireEvent.click(buttonD)
    fireEvent.click(buttonF)
    fireEvent.click(buttonJ)
    fireEvent.click(buttonK)
    fireEvent.click(buttonG)
    expect(container.querySelector('img[src]')).toBeInTheDocument();
    // guess six times
    // check img alt
});

// FIXME: fix test, snapshot has changed
it('matches snapshot', function () {
    const { container } = render(<Snowman />);

    expect(container.querySelector('img[alt="0"]')).toBeInTheDocument();

    // TODO: refactor to list
    const buttonB = container.querySelector('button[value="b"]')
    const buttonC = container.querySelector('button[value="c"]')
    const buttonD = container.querySelector('button[value="d"]')
    const buttonF = container.querySelector('button[value="f"]')
    const buttonJ = container.querySelector('button[value="j"]')
    const buttonK = container.querySelector('button[value="k"]')
    const buttonG = container.querySelector('button[value="g"]')

    fireEvent.click(buttonB)
    fireEvent.click(buttonC)
    fireEvent.click(buttonD)
    fireEvent.click(buttonF)
    fireEvent.click(buttonJ)
    fireEvent.click(buttonK)
    fireEvent.click(buttonG)

    expect(container).toMatchSnapshot();
})