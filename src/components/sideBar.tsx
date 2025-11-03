"use client";

import menuOptions from "@/data/menuOptions";
import React from "react";
import { cn } from "@/util/clsx";
import RateChange from "./rateChange";
import Icon from "./icon";

const SideBard = () => {
    const [selected, setSelected] = React.useState(0);

    return (
        <div className="max-w-[280px] w-full gap-6 flex flex-col">
            <div className="flex items-center justify-center px-9 pt-6 pb-2">
                <Icon style="w-[192px] h-[63px]" variant="companyLogoIcon" />
            </div>
            <div className="flex flex-col gap-6">
                <ul className="mx-4 flex flex-col">
                    {menuOptions.map((option, index) => (
                        <li
                            key={option.label}
                            className={[
                                "p-4 cursor-pointer flex justify-between rounded-sm mb-2 items-center",
                                selected === index ? "bg-sidebar-active" : "",
                            ].join(" ")}
                            onClick={() => setSelected(index)}
                        >
                            <div className="flex items-center gap-3">
                                <Icon variant={option.icon} size={24} svgClassName={cn({ "fill-active": selected === index })} />
                                <span className={cn(
                                    "text-label font-medium caption1",
                                    { "text-active": selected === index }
                                )}>{option.label}</span>
                            </div>
                            <Icon variant="chevronRightIcon" size={24} svgClassName={cn({ "fill-active": selected === index })} />
                        </li>
                    ))}
                </ul>
                <RateChange />
            </div>
        </div>
    )
}

export default SideBard;