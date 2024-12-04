'use client'

import { HeartFilledIcon } from "@/components/icons";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button, Card, CardBody, Image, Slider } from "@nextui-org/react";

export default function Page() {

  const items: Array<{ id: number; name: string }> = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ];

  const airports: Array<{ id: number; name: string }> = [
    { id: 1, name: "Aeropuerto Internacional de Santiago" },
    { id: 2, name: "Aeropuerto Internacional de Valparaiso" },
    { id: 3, name: "Aeropuerto Internacional de Santiago" },
    { id: 4, name: "Aeropuerto Internacional de Valparaiso" },
    { id: 5, name: "Aeropuerto Internacional de Santiago" },
  ];

  return (
    <section className="flex items-center justify-evenly h-full w-full py-10 gap-10 px-10">
      
      {/* Search Bar */}
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-gray-50 bg-opacity-50 backdrop-blur rounded-xl p-4 w-full h-full">
        <h1 className="text-6xl font-bold text-gray-600 mb-5">A donde volas hoy?</h1>
        <Autocomplete
          className="max-w-lg"
          label="Seleccioná un aeropuerto"
          size="lg"
          variant="faded"
        >
          {items.map((item) => (
            <AutocompleteItem key={item.id} value={item.name}>
              {item.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>

      <div className="flex flex-col items-center justify-start gap-4 bg-gray-50 bg-opacity-50 backdrop-blur rounded-xl p-4 h-full">
        {
          airports.map((airport) => (
            <Card
              key={airport.id}
              isBlurred
              className="border-none bg-slate-50 bg-opacity-20 shadow-none backdrop-blur w-full"
            >
              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt="Album cover"
                      className="object-cover"
                      height={100}
                      shadow="md"
                      src="https://nextui.org/images/album-cover.png"
                      width="100%"
                    />
                  </div>

                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-0">
                        <h3 className="font-semibold text-foreground/90">{airport.name}</h3>
                        <p className="text-small text-foreground/80">SCEL</p>
                      </div>
                      <Button
                        isIconOnly
                        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                        radius="full"
                        variant="light"
                      >
                        <HeartFilledIcon
                          className={false ? "[&>path]:stroke-transparent" : ""}
                          fill={false ? "currentColor" : "none"}
                        />
                      </Button>
                    </div>

                    <div className="flex flex-col mt-3 gap-1">

                    </div>

                  </div>
                </div>
              </CardBody>
            </Card>

          ))
        }
      </div>
    </section>
  );
}
