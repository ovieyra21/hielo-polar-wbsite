
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Calculator, Beer } from "lucide-react";

const eventTypes = [
  { id: "party", label: "Fiesta", kgPerPerson: 0.5 },
  { id: "wedding", label: "Boda", kgPerPerson: 0.8 },
  { id: "corporate", label: "Evento Corporativo", kgPerPerson: 0.4 },
  { id: "cocktail", label: "Coctelería", kgPerPerson: 0.3 },
  { id: "birthday", label: "Fiesta Infantil", kgPerPerson: 0.3 },
  { id: "graduation", label: "Graduación", kgPerPerson: 0.6 },
  { id: "pool", label: "Fiesta en Alberca", kgPerPerson: 1.0 },
];

const beerTypes = [
  { id: "small", label: "24 cervezas ampolleta (255ml)", kgPerCarton: 4.375, cartonsPerBar: 15 },
  { id: "regular", label: "24 cervezas regulares (355ml)", kgPerCarton: 7, cartonsPerBar: 9 },
  { id: "family", label: "12 cervezas familiares", kgPerCarton: 8, cartonsPerBar: 8 },
];

const conservationTips = {
  small: "Guarda el hielo en conservadores térmicos y mantenlos en sombra.",
  medium: "Utiliza conservadores térmicos y cubre con mantas térmicas para mayor duración.",
  large: "Para eventos grandes, programa entregas escalonadas o renta un refrigerador adicional."
};

const CalculadoraPage = () => {
  const [guests, setGuests] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [beerCartons, setBeerCartons] = useState<string>("");
  const [beerType, setBeerType] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [tip, setTip] = useState<string>("");
  const [bags, setBags] = useState<number>(0);
  const [iceBars, setIceBars] = useState<number>(0);
  const [beerIceBars, setBeerIceBars] = useState<number>(0);

  const calculateIce = () => {
    const selectedEvent = eventTypes.find((type) => type.id === eventType);
    if (!selectedEvent || !guests) return;

    const guestsNumber = parseInt(guests);
    const iceNeeded = guestsNumber * selectedEvent.kgPerPerson;
    
    // Calculate number of 5kg bags - this is the main ice needed
    const calculatedBags = Math.ceil(iceNeeded / 5);
    
    // Calculate ice bars for general cooling (1 bar per 40-50 guests)
    const calculatedBars = Math.ceil(guestsNumber / 45);
    
    // Calculate ice bars needed for beer if specified
    let calculatedBeerBars = 0;
    if (beerCartons && beerType) {
      const selectedBeer = beerTypes.find((beer) => beer.id === beerType);
      if (selectedBeer) {
        const cartonsNumber = parseInt(beerCartons);
        calculatedBeerBars = Math.ceil(cartonsNumber / selectedBeer.cartonsPerBar);
      }
    }
    
    setResult(iceNeeded);
    setBags(calculatedBags);
    setIceBars(calculatedBars);
    setBeerIceBars(calculatedBeerBars);
    
    // Set conservation tip based on amount
    if (iceNeeded < 25) {
      setTip(conservationTips.small);
    } else if (iceNeeded < 75) {
      setTip(conservationTips.medium);
    } else {
      setTip(conservationTips.large);
    }
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-20 bg-ice-700">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadora de Hielo</h1>
            <div className="h-1 w-20 bg-white mt-4 mb-8 rounded-full" />
            <p className="text-xl">
              Calcula fácilmente la cantidad de hielo que necesitarás para tu evento.
              Incluye cálculos específicos para cervezas y diferentes tipos de eventos.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTVMNDUgNDVNMTUgNDVMNDUgMTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-ice-100 shadow-lg">
              <CardHeader className="bg-ice-50">
                <CardTitle className="text-center text-2xl text-ice-700 flex items-center justify-center">
                  <Calculator className="mr-2" /> 
                  Calcula la cantidad ideal de hielo para tu evento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="guests" className="text-sm font-medium text-ice-600">
                      Número de Invitados
                    </label>
                    <Input
                      id="guests"
                      type="number"
                      placeholder="Ej: 100"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="border-ice-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ice-600">
                      Tipo de Evento
                    </label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="border-ice-200">
                        <SelectValue placeholder="Selecciona el tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Sección adicional para cervezas */}
                <div className="border-t pt-6">
                  <h4 className="font-medium text-ice-700 mb-4 flex items-center">
                    <Beer className="mr-2" size={20} />
                    Cálculo adicional para cervezas (opcional)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="beerCartons" className="text-sm font-medium text-ice-600">
                        Número de Cartones de Cerveza
                      </label>
                      <Input
                        id="beerCartons"
                        type="number"
                        placeholder="Ej: 5"
                        value={beerCartons}
                        onChange={(e) => setBeerCartons(e.target.value)}
                        className="border-ice-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ice-600">
                        Tipo de Cerveza
                      </label>
                      <Select value={beerType} onValueChange={setBeerType}>
                        <SelectTrigger className="border-ice-200">
                          <SelectValue placeholder="Selecciona el tipo de cerveza" />
                        </SelectTrigger>
                        <SelectContent>
                          {beerTypes.map((beer) => (
                            <SelectItem key={beer.id} value={beer.id}>
                              {beer.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={calculateIce}
                  className="w-full bg-ice-600 hover:bg-ice-700 text-white py-6 text-lg"
                  disabled={!guests || !eventType}
                >
                  Calcular
                </Button>

                {result !== null && (
                  <div className="mt-6 p-6 bg-ice-50 rounded-lg border border-ice-100">
                    <p className="text-center text-ice-800 text-lg font-medium mb-4">
                      Para tu evento necesitarás aproximadamente{" "}
                      <span className="font-bold text-2xl text-ice-700">
                        {bags} bolsas de Hielo Polar de 5 Kg
                      </span>
                      <br />
                      <span className="text-sm text-gray-600">
                        (Total: {result} kg de hielo)
                      </span>
                    </p>
                    
                    {iceBars > 0 && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-100">
                        <p className="text-sm text-blue-800">
                          <span className="font-medium">Servicio general:</span> Para enfriamiento general, 
                          considera {iceBars} {iceBars === 1 ? "barra" : "barras"} de hielo de 66kg.
                        </p>
                      </div>
                    )}

                    {beerIceBars > 0 && (
                      <div className="mt-3 p-3 bg-amber-50 rounded-md border border-amber-100">
                        <p className="text-sm text-amber-800">
                          <span className="font-medium">Para cervezas:</span> Necesitarás {beerIceBars} {beerIceBars === 1 ? "barra" : "barras"} 
                          de hielo de 66kg adicionales para mantener las cervezas frías.
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-start bg-white p-4 rounded-md border border-ice-100">
                      <Info size={20} className="text-ice-600 mr-2 mt-1 shrink-0" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Recomendación: </span>
                        {tip}
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-ice-50 rounded-lg border border-ice-100">
                    <h4 className="font-medium text-ice-700 mb-2">Especificaciones técnicas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Barras de hielo: 66kg (1m × 0.4m × 0.18m)</li>
                      <li>• Densidad del hielo: 917 kg/m³</li>
                      <li>• Bolsas de hielo: 5kg cada una</li>
                      <li>• Enfriamiento óptimo: 50-75% del volumen</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-ice-50 rounded-lg border border-ice-100">
                    <h4 className="font-medium text-ice-700 mb-2">Cantidad por bebida</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Coctelería: 2-3 cubitos por bebida</li>
                      <li>• Refresco o agua: 3-4 cubitos por vaso</li>
                      <li>• Cartón 24 cervezas 355ml: 7kg de hielo</li>
                      <li>• Cartón 24 ampollas 255ml: 4.4kg de hielo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-ice-700 mb-4">¿Necesitas más ayuda?</h3>
              <p className="text-gray-600 mb-6">
                Si tienes alguna duda sobre la cantidad de hielo que necesitas para tu evento
                o negocio, no dudes en contactarnos. Estaremos encantados de asesorarte con 
                cálculos específicos para tus necesidades.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-ice-600 hover:bg-ice-700">
                  <a href="/contacto">Contáctanos</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CalculadoraPage;
