

const defaultApartmentDetails  = [ 
    //KASHAR CENTER
 { id: "A11A", Tipology:" 1+1", building: "A", scale: 1, floor:1, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Shitur", shenime:"0" },
 { id: "A11B", Tipology:" 3+1", building: "A", scale: 1, floor:1, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Rezervuar", shenime:"0" },
 { id: "A11C", Tipology:" 1+1", building: "A", scale: 1, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A11D", Tipology:" 1+1", building: "A", scale: 1, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A11E", Tipology:" 1+1", building: "A", scale: 1, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A11F", Tipology:" 2+1", building: "A", scale: 1, floor:1, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A11G", Tipology:" 1+1", building: "A", scale: 1, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21A", Tipology:" 1+1", building: "A", scale: 2, floor:1, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21B", Tipology:" 2+1", building: "A", scale: 2, floor:1, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21C", Tipology:" 1+1", building: "A", scale: 2, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21D", Tipology:" 1+1", building: "A", scale: 2, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21E", Tipology:" 1+1", building: "A", scale: 2, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21F", Tipology:" 2+1", building: "A", scale: 2, floor:1, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A21G", Tipology:" 2+1", building: "A", scale: 2, floor:1, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12A", Tipology:" 1+1", building: "A", scale: 1, floor:2, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12B", Tipology:" 3+1", building: "A", scale: 1, floor:2, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12C", Tipology:" 1+1", building: "A", scale: 1, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12D", Tipology:" 1+1", building: "A", scale: 1, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12E", Tipology:" 1+1", building: "A", scale: 1, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12F", Tipology:" 2+1", building: "A", scale: 1, floor:2, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A12G", Tipology:" 1+1", building: "A", scale: 1, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22A", Tipology:" 1+1", building: "A", scale: 2, floor:2, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22B", Tipology:" 2+1", building: "A", scale: 2, floor:2, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22C", Tipology:" 1+1", building: "A", scale: 2, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22D", Tipology:" 1+1", building: "A", scale: 2, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22E", Tipology:" 1+1", building: "A", scale: 2, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22F", Tipology:" 2+1", building: "A", scale: 2, floor:2, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A22G", Tipology:" 2+1", building: "A", scale: 2, floor:2, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13A", Tipology:" 1+1", building: "A", scale: 1, floor:3, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13B", Tipology:" 3+1", building: "A", scale: 1, floor:3, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13C", Tipology:" 1+1", building: "A", scale: 1, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13D", Tipology:" 1+1", building: "A", scale: 1, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13E", Tipology:" 1+1", building: "A", scale: 1, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13F", Tipology:" 2+1", building: "A", scale: 1, floor:3, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A13G", Tipology:" 1+1", building: "A", scale: 1, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23A", Tipology:" 1+1", building: "A", scale: 2, floor:3, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23B", Tipology:" 2+1", building: "A", scale: 2, floor:3, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23C", Tipology:" 1+1", building: "A", scale: 2, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23D", Tipology:" 1+1", building: "A", scale: 2, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23E", Tipology:" 1+1", building: "A", scale: 2, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23F", Tipology:" 2+1", building: "A", scale: 2, floor:3, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A23G", Tipology:" 2+1", building: "A", scale: 2, floor:3, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14A", Tipology:" 1+1", building: "A", scale: 1, floor:4, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14B", Tipology:" 3+1", building: "A", scale: 1, floor:4, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14C", Tipology:" 1+1", building: "A", scale: 1, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14D", Tipology:" 1+1", building: "A", scale: 1, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14E", Tipology:" 1+1", building: "A", scale: 1, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14F", Tipology:" 2+1", building: "A", scale: 1, floor:4, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A14G", Tipology:" 1+1", building: "A", scale: 1, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24A", Tipology:" 1+1", building: "A", scale: 2, floor:4, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24B", Tipology:" 2+1", building: "A", scale: 2, floor:4, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24C", Tipology:" 1+1", building: "A", scale: 2, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24D", Tipology:" 1+1", building: "A", scale: 2, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24E", Tipology:" 1+1", building: "A", scale: 2, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24F", Tipology:" 2+1", building: "A", scale: 2, floor:4, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A24G", Tipology:" 2+1", building: "A", scale: 2, floor:4, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15A", Tipology:" 1+1", building: "A", scale: 1, floor:5, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15B", Tipology:" 3+1", building: "A", scale: 1, floor:5, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15C", Tipology:" 1+1", building: "A", scale: 1, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15D", Tipology:" 1+1", building: "A", scale: 1, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15E", Tipology:" 1+1", building: "A", scale: 1, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15F", Tipology:" 2+1", building: "A", scale: 1, floor:5, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A15G", Tipology:" 1+1", building: "A", scale: 1, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25A", Tipology:" 1+1", building: "A", scale: 2, floor:5, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25B", Tipology:" 2+1", building: "A", scale: 2, floor:5, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25C", Tipology:" 1+1", building: "A", scale: 2, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25D", Tipology:" 1+1", building: "A", scale: 2, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25E", Tipology:" 1+1", building: "A", scale: 2, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25F", Tipology:" 2+1", building: "A", scale: 2, floor:5, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A25G", Tipology:" 2+1", building: "A", scale: 2, floor:5, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16A", Tipology:" 1+1", building: "A", scale: 1, floor:6, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16B", Tipology:" 3+1", building: "A", scale: 1, floor:6, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16C", Tipology:" 1+1", building: "A", scale: 1, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16D", Tipology:" 1+1", building: "A", scale: 1, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16E", Tipology:" 1+1", building: "A", scale: 1, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16F", Tipology:" 2+1", building: "A", scale: 1, floor:6, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A16G", Tipology:" 1+1", building: "A", scale: 1, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26A", Tipology:" 1+1", building: "A", scale: 2, floor:6, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26B", Tipology:" 2+1", building: "A", scale: 2, floor:6, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26C", Tipology:" 1+1", building: "A", scale: 2, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26D", Tipology:" 1+1", building: "A", scale: 2, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26E", Tipology:" 1+1", building: "A", scale: 2, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26F", Tipology:" 2+1", building: "A", scale: 2, floor:6, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A26G", Tipology:" 2+1", building: "A", scale: 2, floor:6, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17A", Tipology:" 1+1", building: "A", scale: 1, floor:7, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17B", Tipology:" 3+1", building: "A", scale: 1, floor:7, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17C", Tipology:" 1+1", building: "A", scale: 1, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17D", Tipology:" 1+1", building: "A", scale: 1, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17E", Tipology:" 1+1", building: "A", scale: 1, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17F", Tipology:" 2+1", building: "A", scale: 1, floor:7, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A17G", Tipology:" 1+1", building: "A", scale: 1, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27A", Tipology:" 1+1", building: "A", scale: 2, floor:7, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27B", Tipology:" 2+1", building: "A", scale: 2, floor:7, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27C", Tipology:" 1+1", building: "A", scale: 2, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27D", Tipology:" 1+1", building: "A", scale: 2, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27E", Tipology:" 1+1", building: "A", scale: 2, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27F", Tipology:" 2+1", building: "A", scale: 2, floor:7, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A27G", Tipology:" 2+1", building: "A", scale: 2, floor:7, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18A", Tipology:" 1+1", building: "A", scale: 1, floor:8, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18B", Tipology:" 3+1", building: "A", scale: 1, floor:8, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18C", Tipology:" 1+1", building: "A", scale: 1, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18D", Tipology:" 1+1", building: "A", scale: 1, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18E", Tipology:" 1+1", building: "A", scale: 1, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18F", Tipology:" 2+1", building: "A", scale: 1, floor:8, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A18G", Tipology:" 1+1", building: "A", scale: 1, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28A", Tipology:" 1+1", building: "A", scale: 2, floor:8, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28B", Tipology:" 2+1", building: "A", scale: 2, floor:8, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28C", Tipology:" 1+1", building: "A", scale: 2, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28D", Tipology:" 1+1", building: "A", scale: 2, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28E", Tipology:" 1+1", building: "A", scale: 2, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28F", Tipology:" 2+1", building: "A", scale: 2, floor:8, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "A28G", Tipology:" 2+1", building: "A", scale: 2, floor:8, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11A", Tipology:" 1+1", building: "B", scale: 1, floor:1, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11B", Tipology:" 3+1", building: "B", scale: 1, floor:1, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11C", Tipology:" 1+1", building: "B", scale: 1, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11D", Tipology:" 1+1", building: "B", scale: 1, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11E", Tipology:" 1+1", building: "B", scale: 1, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11F", Tipology:" 2+1", building: "B", scale: 1, floor:1, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B11G", Tipology:" 1+1", building: "B", scale: 1, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21A", Tipology:" 2+1", building: "B", scale: 2, floor:1, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21B", Tipology:" 2+1", building: "B", scale: 2, floor:1, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21C", Tipology:" 1+1", building: "B", scale: 2, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21D", Tipology:" 1+1", building: "B", scale: 2, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21E", Tipology:" 1+1", building: "B", scale: 2, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21F", Tipology:" 2+1", building: "B", scale: 2, floor:1, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B21G", Tipology:" 1+1", building: "B", scale: 2, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31A", Tipology:" 1+1", building: "B", scale: 3, floor:1, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31B", Tipology:" 2+1", building: "B", scale: 3, floor:1, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31C", Tipology:" 1+1", building: "B", scale: 3, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31D", Tipology:" 1+1", building: "B", scale: 3, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31E", Tipology:" 1+1", building: "B", scale: 3, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31F", Tipology:" 2+1", building: "B", scale: 3, floor:1, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B31G", Tipology:" 2+1", building: "B", scale: 3, floor:1, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12A", Tipology:" 1+1", building: "B", scale: 1, floor:2, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12B", Tipology:" 3+1", building: "B", scale: 1, floor:2, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12C", Tipology:" 1+1", building: "B", scale: 1, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12D", Tipology:" 1+1", building: "B", scale: 1, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12E", Tipology:" 1+1", building: "B", scale: 1, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12F", Tipology:" 2+1", building: "B", scale: 1, floor:2, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B12G", Tipology:" 1+1", building: "B", scale: 1, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22A", Tipology:" 2+1", building: "B", scale: 2, floor:2, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22B", Tipology:" 2+1", building: "B", scale: 2, floor:2, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22C", Tipology:" 1+1", building: "B", scale: 2, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22D", Tipology:" 1+1", building: "B", scale: 2, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22E", Tipology:" 1+1", building: "B", scale: 2, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22F", Tipology:" 2+1", building: "B", scale: 2, floor:2, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B22G", Tipology:" 1+1", building: "B", scale: 2, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32A", Tipology:" 1+1", building: "B", scale: 3, floor:2, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32B", Tipology:" 2+1", building: "B", scale: 3, floor:2, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32C", Tipology:" 1+1", building: "B", scale: 3, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32D", Tipology:" 1+1", building: "B", scale: 3, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32E", Tipology:" 1+1", building: "B", scale: 3, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32F", Tipology:" 2+1", building: "B", scale: 3, floor:2, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B32G", Tipology:" 2+1", building: "B", scale: 3, floor:2, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13A", Tipology:" 1+1", building: "B", scale: 1, floor:3, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13B", Tipology:" 3+1", building: "B", scale: 1, floor:3, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13C", Tipology:" 1+1", building: "B", scale: 1, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13D", Tipology:" 1+1", building: "B", scale: 1, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13E", Tipology:" 1+1", building: "B", scale: 1, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13F", Tipology:" 2+1", building: "B", scale: 1, floor:3, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B13G", Tipology:" 1+1", building: "B", scale: 1, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23A", Tipology:" 2+1", building: "B", scale: 2, floor:3, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23B", Tipology:" 2+1", building: "B", scale: 2, floor:3, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23C", Tipology:" 1+1", building: "B", scale: 2, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23D", Tipology:" 1+1", building: "B", scale: 2, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23E", Tipology:" 1+1", building: "B", scale: 2, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23F", Tipology:" 2+1", building: "B", scale: 2, floor:3, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B23G", Tipology:" 1+1", building: "B", scale: 2, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33A", Tipology:" 1+1", building: "B", scale: 3, floor:3, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33B", Tipology:" 2+1", building: "B", scale: 3, floor:3, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33C", Tipology:" 1+1", building: "B", scale: 3, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33D", Tipology:" 1+1", building: "B", scale: 3, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33E", Tipology:" 1+1", building: "B", scale: 3, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33F", Tipology:" 2+1", building: "B", scale: 3, floor:3, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B33G", Tipology:" 2+1", building: "B", scale: 3, floor:3, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14A", Tipology:" 1+1", building: "B", scale: 1, floor:4, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14B", Tipology:" 3+1", building: "B", scale: 1, floor:4, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14C", Tipology:" 1+1", building: "B", scale: 1, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14D", Tipology:" 1+1", building: "B", scale: 1, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14E", Tipology:" 1+1", building: "B", scale: 1, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14F", Tipology:" 2+1", building: "B", scale: 1, floor:4, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B14G", Tipology:" 1+1", building: "B", scale: 1, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24A", Tipology:" 2+1", building: "B", scale: 2, floor:4, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24B", Tipology:" 2+1", building: "B", scale: 2, floor:4, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24C", Tipology:" 1+1", building: "B", scale: 2, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24D", Tipology:" 1+1", building: "B", scale: 2, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24E", Tipology:" 1+1", building: "B", scale: 2, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24F", Tipology:" 2+1", building: "B", scale: 2, floor:4, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B24G", Tipology:" 1+1", building: "B", scale: 2, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34A", Tipology:" 1+1", building: "B", scale: 3, floor:4, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34B", Tipology:" 2+1", building: "B", scale: 3, floor:4, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34C", Tipology:" 1+1", building: "B", scale: 3, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34D", Tipology:" 1+1", building: "B", scale: 3, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34E", Tipology:" 1+1", building: "B", scale: 3, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34F", Tipology:" 2+1", building: "B", scale: 3, floor:4, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B34G", Tipology:" 2+1", building: "B", scale: 3, floor:4, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15A", Tipology:" 1+1", building: "B", scale: 1, floor:5, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15B", Tipology:" 3+1", building: "B", scale: 1, floor:5, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15C", Tipology:" 1+1", building: "B", scale: 1, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15D", Tipology:" 1+1", building: "B", scale: 1, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15E", Tipology:" 1+1", building: "B", scale: 1, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15F", Tipology:" 2+1", building: "B", scale: 1, floor:5, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B15G", Tipology:" 1+1", building: "B", scale: 1, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25A", Tipology:" 2+1", building: "B", scale: 2, floor:5, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25B", Tipology:" 2+1", building: "B", scale: 2, floor:5, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25C", Tipology:" 1+1", building: "B", scale: 2, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25D", Tipology:" 1+1", building: "B", scale: 2, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25E", Tipology:" 1+1", building: "B", scale: 2, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25F", Tipology:" 2+1", building: "B", scale: 2, floor:5, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B25G", Tipology:" 1+1", building: "B", scale: 2, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35A", Tipology:" 1+1", building: "B", scale: 3, floor:5, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35B", Tipology:" 2+1", building: "B", scale: 3, floor:5, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35C", Tipology:" 1+1", building: "B", scale: 3, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35D", Tipology:" 1+1", building: "B", scale: 3, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35E", Tipology:" 1+1", building: "B", scale: 3, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35F", Tipology:" 2+1", building: "B", scale: 3, floor:5, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B35G", Tipology:" 2+1", building: "B", scale: 3, floor:5, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16A", Tipology:" 1+1", building: "B", scale: 1, floor:6, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16B", Tipology:" 3+1", building: "B", scale: 1, floor:6, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16C", Tipology:" 1+1", building: "B", scale: 1, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16D", Tipology:" 1+1", building: "B", scale: 1, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16E", Tipology:" 1+1", building: "B", scale: 1, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16F", Tipology:" 2+1", building: "B", scale: 1, floor:6, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B16G", Tipology:" 1+1", building: "B", scale: 1, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26A", Tipology:" 2+1", building: "B", scale: 2, floor:6, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26B", Tipology:" 2+1", building: "B", scale: 2, floor:6, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26C", Tipology:" 1+1", building: "B", scale: 2, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26D", Tipology:" 1+1", building: "B", scale: 2, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26E", Tipology:" 1+1", building: "B", scale: 2, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26F", Tipology:" 2+1", building: "B", scale: 2, floor:6, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B26G", Tipology:" 1+1", building: "B", scale: 2, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36A", Tipology:" 1+1", building: "B", scale: 3, floor:6, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36B", Tipology:" 2+1", building: "B", scale: 3, floor:6, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36C", Tipology:" 1+1", building: "B", scale: 3, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36D", Tipology:" 1+1", building: "B", scale: 3, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36E", Tipology:" 1+1", building: "B", scale: 3, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36F", Tipology:" 1+1", building: "B", scale: 3, floor:6, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B36G", Tipology:" 2+1", building: "B", scale: 3, floor:6, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17A", Tipology:" 1+1", building: "B", scale: 1, floor:7, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17B", Tipology:" 3+1", building: "B", scale: 1, floor:7, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17C", Tipology:" 1+1", building: "B", scale: 1, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17D", Tipology:" 1+1", building: "B", scale: 1, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17E", Tipology:" 1+1", building: "B", scale: 1, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17F", Tipology:" 2+1", building: "B", scale: 1, floor:7, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B17G", Tipology:" 1+1", building: "B", scale: 1, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27A", Tipology:" 2+1", building: "B", scale: 2, floor:7, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27B", Tipology:" 2+1", building: "B", scale: 2, floor:7, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27C", Tipology:" 1+1", building: "B", scale: 2, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27D", Tipology:" 1+1", building: "B", scale: 2, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27E", Tipology:" 1+1", building: "B", scale: 2, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27F", Tipology:" 2+1", building: "B", scale: 2, floor:7, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B27G", Tipology:" 1+1", building: "B", scale: 2, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37A", Tipology:" 1+1", building: "B", scale: 3, floor:7, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37B", Tipology:" 2+1", building: "B", scale: 3, floor:7, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37C", Tipology:" 1+1", building: "B", scale: 3, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37D", Tipology:" 1+1", building: "B", scale: 3, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37E", Tipology:" 1+1", building: "B", scale: 3, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37F", Tipology:" 2+1", building: "B", scale: 3, floor:7, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B37G", Tipology:" 2+1", building: "B", scale: 3, floor:7, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18A", Tipology:" 1+1", building: "B", scale: 1, floor:8, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18B", Tipology:" 3+1", building: "B", scale: 1, floor:8, apartment :"B", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18C", Tipology:" 1+1", building: "B", scale: 1, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18D", Tipology:" 1+1", building: "B", scale: 1, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18E", Tipology:" 1+1", building: "B", scale: 1, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18F", Tipology:" 2+1", building: "B", scale: 1, floor:8, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B18G", Tipology:" 1+1", building: "B", scale: 1, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28A", Tipology:" 2+1", building: "B", scale: 2, floor:8, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28B", Tipology:" 2+1", building: "B", scale: 2, floor:8, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28C", Tipology:" 1+1", building: "B", scale: 2, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28D", Tipology:" 1+1", building: "B", scale: 2, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28E", Tipology:" 1+1", building: "B", scale: 2, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28F", Tipology:" 2+1", building: "B", scale: 2, floor:8, apartment :"F", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B28G", Tipology:" 1+1", building: "B", scale: 2, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38A", Tipology:" 1+1", building: "B", scale: 3, floor:8, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38B", Tipology:" 2+1", building: "B", scale: 3, floor:8, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38C", Tipology:" 1+1", building: "B", scale: 3, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38D", Tipology:" 1+1", building: "B", scale: 3, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38E", Tipology:" 1+1", building: "B", scale: 3, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38F", Tipology:" 2+1", building: "B", scale: 3, floor:8, apartment :"F", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "B38G", Tipology:" 2+1", building: "B", scale: 3, floor:8, apartment :"G", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11A", Tipology:" 2+1", building: "C", scale: 1, floor:1, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11B", Tipology:" 1+1", building: "C", scale: 1, floor:1, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11C", Tipology:" 2+1", building: "C", scale: 1, floor:1, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11D", Tipology:" 1+1", building: "C", scale: 1, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11E", Tipology:" 1+1", building: "C", scale: 1, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11F", Tipology:" 1+1", building: "C", scale: 1, floor:1, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11G", Tipology:" 1+1", building: "C", scale: 1, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11H", Tipology:" 2+1", building: "C", scale: 1, floor:1, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C11I", Tipology:" 1+1", building: "C", scale: 1, floor:1, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21A", Tipology:" 1+1", building: "C", scale: 2, floor:1, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21B", Tipology:" 2+1", building: "C", scale: 2, floor:1, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21C", Tipology:" 1+1", building: "C", scale: 2, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21D", Tipology:" 1+1", building: "C", scale: 2, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21E", Tipology:" 1+1", building: "C", scale: 2, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21F", Tipology:" 3+1", building: "C", scale: 2, floor:1, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C21G", Tipology:" 1+1", building: "C", scale: 2, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12A", Tipology:" 2+1", building: "C", scale: 1, floor:2, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12B", Tipology:" 1+1", building: "C", scale: 1, floor:2, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12C", Tipology:" 2+1", building: "C", scale: 1, floor:2, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12D", Tipology:" 1+1", building: "C", scale: 1, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12E", Tipology:" 1+1", building: "C", scale: 1, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12F", Tipology:" 1+1", building: "C", scale: 1, floor:2, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12G", Tipology:" 1+1", building: "C", scale: 1, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12H", Tipology:" 2+1", building: "C", scale: 1, floor:2, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C12I", Tipology:" 1+1", building: "C", scale: 1, floor:2, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22A", Tipology:" 1+1", building: "C", scale: 2, floor:2, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22B", Tipology:" 2+1", building: "C", scale: 2, floor:2, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22C", Tipology:" 1+1", building: "C", scale: 2, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22D", Tipology:" 1+1", building: "C", scale: 2, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22E", Tipology:" 1+1", building: "C", scale: 2, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22F", Tipology:" 3+1", building: "C", scale: 2, floor:2, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C22G", Tipology:" 1+1", building: "C", scale: 2, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13A", Tipology:" 2+1", building: "C", scale: 1, floor:3, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13B", Tipology:" 1+1", building: "C", scale: 1, floor:3, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13C", Tipology:" 2+1", building: "C", scale: 1, floor:3, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13D", Tipology:" 1+1", building: "C", scale: 1, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13E", Tipology:" 1+1", building: "C", scale: 1, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13F", Tipology:" 1+1", building: "C", scale: 1, floor:3, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13G", Tipology:" 1+1", building: "C", scale: 1, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13H", Tipology:" 2+1", building: "C", scale: 1, floor:3, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C13I", Tipology:" 1+1", building: "C", scale: 1, floor:3, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23A", Tipology:" 1+1", building: "C", scale: 2, floor:3, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23B", Tipology:" 2+1", building: "C", scale: 2, floor:3, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23C", Tipology:" 1+1", building: "C", scale: 2, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23D", Tipology:" 1+1", building: "C", scale: 2, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23E", Tipology:" 1+1", building: "C", scale: 2, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23F", Tipology:" 3+1", building: "C", scale: 2, floor:3, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C23G", Tipology:" 1+1", building: "C", scale: 2, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14A", Tipology:" 2+1", building: "C", scale: 1, floor:4, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14B", Tipology:" 1+1", building: "C", scale: 1, floor:4, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14C", Tipology:" 2+1", building: "C", scale: 1, floor:4, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14D", Tipology:" 1+1", building: "C", scale: 1, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14E", Tipology:" 1+1", building: "C", scale: 1, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14F", Tipology:" 1+1", building: "C", scale: 1, floor:4, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14G", Tipology:" 1+1", building: "C", scale: 1, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14H", Tipology:" 2+1", building: "C", scale: 1, floor:4, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C14I", Tipology:" 1+1", building: "C", scale: 1, floor:4, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24A", Tipology:" 1+1", building: "C", scale: 2, floor:4, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24B", Tipology:" 2+1", building: "C", scale: 2, floor:4, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24C", Tipology:" 1+1", building: "C", scale: 2, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24D", Tipology:" 1+1", building: "C", scale: 2, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24E", Tipology:" 1+1", building: "C", scale: 2, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24F", Tipology:" 3+1", building: "C", scale: 2, floor:4, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C24G", Tipology:" 1+1", building: "C", scale: 2, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15A", Tipology:" 2+1", building: "C", scale: 1, floor:5, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15B", Tipology:" 1+1", building: "C", scale: 1, floor:5, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15C", Tipology:" 2+1", building: "C", scale: 1, floor:5, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15D", Tipology:" 1+1", building: "C", scale: 1, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15E", Tipology:" 1+1", building: "C", scale: 1, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15F", Tipology:" 1+1", building: "C", scale: 1, floor:5, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15G", Tipology:" 1+1", building: "C", scale: 1, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15H", Tipology:" 2+1", building: "C", scale: 1, floor:5, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C15I", Tipology:" 1+1", building: "C", scale: 1, floor:5, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25A", Tipology:" 1+1", building: "C", scale: 2, floor:5, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25B", Tipology:" 2+1", building: "C", scale: 2, floor:5, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25C", Tipology:" 1+1", building: "C", scale: 2, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25D", Tipology:" 1+1", building: "C", scale: 2, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25E", Tipology:" 1+1", building: "C", scale: 2, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25F", Tipology:" 3+1", building: "C", scale: 2, floor:5, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C25G", Tipology:" 1+1", building: "C", scale: 2, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16A", Tipology:" 2+1", building: "C", scale: 1, floor:6, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16B", Tipology:" 1+1", building: "C", scale: 1, floor:6, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16C", Tipology:" 2+1", building: "C", scale: 1, floor:6, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16D", Tipology:" 1+1", building: "C", scale: 1, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16E", Tipology:" 1+1", building: "C", scale: 1, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16F", Tipology:" 1+1", building: "C", scale: 1, floor:6, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16G", Tipology:" 1+1", building: "C", scale: 1, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16H", Tipology:" 2+1", building: "C", scale: 1, floor:6, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C16I", Tipology:" 1+1", building: "C", scale: 1, floor:6, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26A", Tipology:" 1+1", building: "C", scale: 2, floor:6, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26B", Tipology:" 2+1", building: "C", scale: 2, floor:6, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26C", Tipology:" 1+1", building: "C", scale: 2, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26D", Tipology:" 1+1", building: "C", scale: 2, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26E", Tipology:" 1+1", building: "C", scale: 2, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26F", Tipology:" 3+1", building: "C", scale: 2, floor:6, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C26G", Tipology:" 1+1", building: "C", scale: 2, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17A", Tipology:" 2+1", building: "C", scale: 1, floor:7, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17B", Tipology:" 1+1", building: "C", scale: 1, floor:7, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17C", Tipology:" 2+1", building: "C", scale: 1, floor:7, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17D", Tipology:" 1+1", building: "C", scale: 1, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17E", Tipology:" 1+1", building: "C", scale: 1, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17F", Tipology:" 1+1", building: "C", scale: 1, floor:7, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17G", Tipology:" 1+1", building: "C", scale: 1, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17H", Tipology:" 2+1", building: "C", scale: 1, floor:7, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C17I", Tipology:" 1+1", building: "C", scale: 1, floor:7, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27A", Tipology:" 1+1", building: "C", scale: 2, floor:7, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27B", Tipology:" 2+1", building: "C", scale: 2, floor:7, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27C", Tipology:" 1+1", building: "C", scale: 2, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27D", Tipology:" 1+1", building: "C", scale: 2, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27E", Tipology:" 1+1", building: "C", scale: 2, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27F", Tipology:" 3+1", building: "C", scale: 2, floor:7, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C27G", Tipology:" 1+1", building: "C", scale: 2, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18A", Tipology:" 2+1", building: "C", scale: 1, floor:8, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18B", Tipology:" 1+1", building: "C", scale: 1, floor:8, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18C", Tipology:" 2+1", building: "C", scale: 1, floor:8, apartment :"C", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18D", Tipology:" 1+1", building: "C", scale: 1, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18E", Tipology:" 1+1", building: "C", scale: 1, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18F", Tipology:" 1+1", building: "C", scale: 1, floor:8, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18G", Tipology:" 1+1", building: "C", scale: 1, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18H", Tipology:" 2+1", building: "C", scale: 1, floor:8, apartment :"H", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C18I", Tipology:" 1+1", building: "C", scale: 1, floor:8, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28A", Tipology:" 1+1", building: "C", scale: 2, floor:8, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28B", Tipology:" 2+1", building: "C", scale: 2, floor:8, apartment :"B", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28C", Tipology:" 1+1", building: "C", scale: 2, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28D", Tipology:" 1+1", building: "C", scale: 2, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28E", Tipology:" 1+1", building: "C", scale: 2, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28F", Tipology:" 3+1", building: "C", scale: 2, floor:8, apartment :"F", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "C28G", Tipology:" 1+1", building: "C", scale: 2, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11A", Tipology:" 3+1", building: "D", scale: 1, floor:1, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11B", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11C", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11D", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11E", Tipology:" 2+1", building: "D", scale: 1, floor:1, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11F", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11G", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11H", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D11I", Tipology:" 1+1", building: "D", scale: 1, floor:1, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12A", Tipology:" 3+1", building: "D", scale: 1, floor:2, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12B", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12C", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12D", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12E", Tipology:" 2+1", building: "D", scale: 1, floor:2, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12F", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12G", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12H", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D12I", Tipology:" 1+1", building: "D", scale: 1, floor:2, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13A", Tipology:" 3+1", building: "D", scale: 1, floor:3, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13B", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13C", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13D", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13E", Tipology:" 2+1", building: "D", scale: 1, floor:3, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13F", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13G", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13H", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D13I", Tipology:" 1+1", building: "D", scale: 1, floor:3, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14A", Tipology:" 3+1", building: "D", scale: 1, floor:4, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14B", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14C", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14D", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14E", Tipology:" 2+1", building: "D", scale: 1, floor:4, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14F", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14G", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14H", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D14I", Tipology:" 1+1", building: "D", scale: 1, floor:4, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15A", Tipology:" 3+1", building: "D", scale: 1, floor:5, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15B", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15C", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15D", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15E", Tipology:" 2+1", building: "D", scale: 1, floor:5, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15F", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15G", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15H", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D15I", Tipology:" 1+1", building: "D", scale: 1, floor:5, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16A", Tipology:" 3+1", building: "D", scale: 1, floor:6, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16B", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16C", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16D", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16E", Tipology:" 2+1", building: "D", scale: 1, floor:6, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16F", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16G", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16H", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D16I", Tipology:" 1+1", building: "D", scale: 1, floor:6, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17A", Tipology:" 3+1", building: "D", scale: 1, floor:7, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17B", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17C", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17D", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17E", Tipology:" 2+1", building: "D", scale: 1, floor:7, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17F", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17G", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17H", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D17I", Tipology:" 1+1", building: "D", scale: 1, floor:7, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18A", Tipology:" 3+1", building: "D", scale: 1, floor:8, apartment :"A", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18B", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18C", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18D", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18E", Tipology:" 2+1", building: "D", scale: 1, floor:8, apartment :"E", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18F", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18G", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18H", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "D18I", Tipology:" 1+1", building: "D", scale: 1, floor:8, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11A", Tipology:" 2+1", building: "E", scale: 1, floor:1, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11B", Tipology:" 2+1", building: "E", scale: 1, floor:1, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11C", Tipology:" 1+1", building: "E", scale: 1, floor:1, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11D", Tipology:" 1+1", building: "E", scale: 1, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11E", Tipology:" 1+1", building: "E", scale: 1, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11F", Tipology:" 1+1", building: "E", scale: 1, floor:1, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11G", Tipology:" 2+1", building: "E", scale: 1, floor:1, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11H", Tipology:" 1+1", building: "E", scale: 1, floor:1, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E11I", Tipology:" 1+1", building: "E", scale: 1, floor:1, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21A", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21B", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21C", Tipology:" 2+1", building: "E", scale: 2, floor:1, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21D", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21E", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21F", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21G", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21H", Tipology:" 3+1", building: "E", scale: 2, floor:1, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E21I", Tipology:" 1+1", building: "E", scale: 2, floor:1, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12A", Tipology:" 2+1", building: "E", scale: 1, floor:2, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12B", Tipology:" 2+1", building: "E", scale: 1, floor:2, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12C", Tipology:" 1+1", building: "E", scale: 1, floor:2, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12D", Tipology:" 1+1", building: "E", scale: 1, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12E", Tipology:" 1+1", building: "E", scale: 1, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12F", Tipology:" 1+1", building: "E", scale: 1, floor:2, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12G", Tipology:" 2+1", building: "E", scale: 1, floor:2, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12H", Tipology:" 1+1", building: "E", scale: 1, floor:2, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E12I", Tipology:" 1+1", building: "E", scale: 1, floor:2, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22A", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22B", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22C", Tipology:" 2+1", building: "E", scale: 2, floor:2, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22D", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22E", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22F", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22G", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22H", Tipology:" 3+1", building: "E", scale: 2, floor:2, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E22I", Tipology:" 1+1", building: "E", scale: 2, floor:2, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13A", Tipology:" 2+1", building: "E", scale: 1, floor:3, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13B", Tipology:" 2+1", building: "E", scale: 1, floor:3, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13C", Tipology:" 1+1", building: "E", scale: 1, floor:3, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13D", Tipology:" 1+1", building: "E", scale: 1, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13E", Tipology:" 1+1", building: "E", scale: 1, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13F", Tipology:" 1+1", building: "E", scale: 1, floor:3, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13G", Tipology:" 2+1", building: "E", scale: 1, floor:3, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13H", Tipology:" 1+1", building: "E", scale: 1, floor:3, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E13I", Tipology:" 1+1", building: "E", scale: 1, floor:3, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23A", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23B", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23C", Tipology:" 2+1", building: "E", scale: 2, floor:3, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23D", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23E", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23F", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23G", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23H", Tipology:" 3+1", building: "E", scale: 2, floor:3, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E23I", Tipology:" 1+1", building: "E", scale: 2, floor:3, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14A", Tipology:" 2+1", building: "E", scale: 1, floor:4, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14B", Tipology:" 2+1", building: "E", scale: 1, floor:4, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14C", Tipology:" 1+1", building: "E", scale: 1, floor:4, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14D", Tipology:" 1+1", building: "E", scale: 1, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14E", Tipology:" 1+1", building: "E", scale: 1, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14F", Tipology:" 1+1", building: "E", scale: 1, floor:4, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14G", Tipology:" 2+1", building: "E", scale: 1, floor:4, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14H", Tipology:" 1+1", building: "E", scale: 1, floor:4, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E14I", Tipology:" 1+1", building: "E", scale: 1, floor:4, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24A", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24B", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24C", Tipology:" 2+1", building: "E", scale: 2, floor:4, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24D", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24E", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24F", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24G", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24H", Tipology:" 3+1", building: "E", scale: 2, floor:4, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E24I", Tipology:" 1+1", building: "E", scale: 2, floor:4, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15A", Tipology:" 2+1", building: "E", scale: 1, floor:5, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15B", Tipology:" 2+1", building: "E", scale: 1, floor:5, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15C", Tipology:" 1+1", building: "E", scale: 1, floor:5, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15D", Tipology:" 1+1", building: "E", scale: 1, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15E", Tipology:" 1+1", building: "E", scale: 1, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15F", Tipology:" 1+1", building: "E", scale: 1, floor:5, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15G", Tipology:" 2+1", building: "E", scale: 1, floor:5, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15H", Tipology:" 1+1", building: "E", scale: 1, floor:5, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E15I", Tipology:" 1+1", building: "E", scale: 1, floor:5, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25A", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25B", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25C", Tipology:" 2+1", building: "E", scale: 2, floor:5, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25D", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25E", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25F", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25G", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25H", Tipology:" 3+1", building: "E", scale: 2, floor:5, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E25I", Tipology:" 1+1", building: "E", scale: 2, floor:5, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16A", Tipology:" 2+1", building: "E", scale: 1, floor:6, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16B", Tipology:" 2+1", building: "E", scale: 1, floor:6, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16C", Tipology:" 1+1", building: "E", scale: 1, floor:6, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16D", Tipology:" 1+1", building: "E", scale: 1, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16E", Tipology:" 1+1", building: "E", scale: 1, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16F", Tipology:" 1+1", building: "E", scale: 1, floor:6, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16G", Tipology:" 2+1", building: "E", scale: 1, floor:6, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16H", Tipology:" 1+1", building: "E", scale: 1, floor:6, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E16I", Tipology:" 1+1", building: "E", scale: 1, floor:6, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26A", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26B", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26C", Tipology:" 2+1", building: "E", scale: 2, floor:6, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26D", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26E", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26F", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26G", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26H", Tipology:" 3+1", building: "E", scale: 2, floor:6, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E26I", Tipology:" 1+1", building: "E", scale: 2, floor:6, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17A", Tipology:" 2+1", building: "E", scale: 1, floor:7, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17B", Tipology:" 2+1", building: "E", scale: 1, floor:7, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17C", Tipology:" 1+1", building: "E", scale: 1, floor:7, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17D", Tipology:" 1+1", building: "E", scale: 1, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17E", Tipology:" 1+1", building: "E", scale: 1, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17F", Tipology:" 1+1", building: "E", scale: 1, floor:7, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17G", Tipology:" 2+1", building: "E", scale: 1, floor:7, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17H", Tipology:" 1+1", building: "E", scale: 1, floor:7, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E17I", Tipology:" 1+1", building: "E", scale: 1, floor:7, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27A", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27B", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27C", Tipology:" 2+1", building: "E", scale: 2, floor:7, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27D", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27E", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27F", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27G", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27H", Tipology:" 3+1", building: "E", scale: 2, floor:7, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E27I", Tipology:" 1+1", building: "E", scale: 2, floor:7, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18A", Tipology:" 2+1", building: "E", scale: 1, floor:8, apartment :"A", totalNetArea:87, commonArea: 13.05, totalArea: 100.05, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18B", Tipology:" 2+1", building: "E", scale: 1, floor:8, apartment :"B", totalNetArea:105, commonArea: 15.75, totalArea: 120.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18C", Tipology:" 1+1", building: "E", scale: 1, floor:8, apartment :"C", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18D", Tipology:" 1+1", building: "E", scale: 1, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18E", Tipology:" 1+1", building: "E", scale: 1, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18F", Tipology:" 1+1", building: "E", scale: 1, floor:8, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18G", Tipology:" 2+1", building: "E", scale: 1, floor:8, apartment :"G", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18H", Tipology:" 1+1", building: "E", scale: 1, floor:8, apartment :"H", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E18I", Tipology:" 1+1", building: "E", scale: 1, floor:8, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28A", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"A", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28B", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"B", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28C", Tipology:" 2+1", building: "E", scale: 2, floor:8, apartment :"C", totalNetArea:100.5, commonArea: 15.07, totalArea: 115.57, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28D", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"D", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28E", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"E", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28F", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"F", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28G", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"G", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28H", Tipology:" 3+1", building: "E", scale: 2, floor:8, apartment :"H", totalNetArea:126, commonArea: 18.9, totalArea: 144.9, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },
 { id: "E28I", Tipology:" 1+1", building: "E", scale: 2, floor:8, apartment :"I", totalNetArea:65, commonArea: 9.75, totalArea: 74.75, parking:0, ParkingNumber:0 , statusi:"Per Shitje", shenime:"0" },

]

// === COMMON ELEMENTS ===
const buildingSelect = document.getElementById("buildingSelect");
const floorSelect = document.getElementById("floorSelect");
const scaleSelect = document.getElementById("scaleSelect");
const apartmentSelect = document.getElementById("apartmentSelect");
const apartmentDetails = document.getElementById("apartmentDetails");
const tablePlanContainer = document.getElementById("table-plan");
const header = document.getElementById("floorHeader");
const apartmentDetailsDiv = document.getElementById("apartmentDetails");
const apartmentValueTable = document.getElementById("apartmentValue");


// === 🏗️ FUNCTION: Show Floor ===
function showFloor(selectedBuilding, selectedFloor) {
  if (!selectedBuilding || !selectedFloor) return;

  // Update dropdown
  floorSelect.value = selectedFloor;

  // Show header
  header.textContent = `GODINA ${selectedBuilding} - KATI ${selectedFloor}`;
  tablePlanContainer.style.display = "block";

  // Generate the table layout
  generateTableLayout(selectedBuilding);

  // Populate apartments
  populateApartments(selectedBuilding, selectedFloor);
}


// === BUILDING CONFIGURATION MAP ===


const buildingLayouts = {
  A: [
    { scale: 1, layout: 1 },
    { scale: 2, layout: 1 },
  ],
  B: [
    { scale: 1, layout: 1 },
    { scale: 2, layout: 1 },
    { scale: 3, layout: 1 },
  ],
  C: [
    { scale: 1, layout: 2 },
    { scale: 2, layout: 1 },
  ],
  D: [{ scale: 1, layout: 3 }],
  E: [
    { scale: 1, layout: 4 },
    { scale: 2, layout: 2 },
  ],
};

const layoutApartments = {
  1: ["A", "B", "C", "D", "E", "F", "G"],
  2: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  3: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  4: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
};


// === BUILDING CHANGE HANDLER ===
buildingSelect.addEventListener("change", () => {
  const building = buildingSelect.value;
  resetSelect(scaleSelect, "SHKALLA");
  resetSelect(apartmentSelect, "APARTAMENTI");
  apartmentDetails.innerHTML = "";

  if (!building || !buildingLayouts[building]) return;

  // Get the available scales for that building
  const scales = buildingLayouts[building].map((s) => s.scale.toString());

  // Show only existing scales
  Array.from(scaleSelect.options).forEach((opt) => {
    if (opt.value === "") return;
    opt.style.display = scales.includes(opt.value) ? "block" : "none";
  });
});

// === SCALE CHANGE HANDLER ===
scaleSelect.addEventListener("change", () => {
  const building = buildingSelect.value;
  const scale = parseInt(scaleSelect.value, 10);
  resetSelect(apartmentSelect, "APARTAMENTI");
  apartmentDetails.innerHTML = "";

  if (!building || !scale || !buildingLayouts[building]) return;

  // Find layout for this scale
  const scaleData = buildingLayouts[building].find((s) => s.scale === scale);
  if (!scaleData) return;

  const layout = scaleData.layout;
  const apartments = layoutApartments[layout] || [];

  // Show only apartments existing in that layout
  Array.from(apartmentSelect.options).forEach((opt) => {
    if (opt.value === "") return;
    opt.style.display = apartments.includes(opt.value) ? "block" : "none";
  });
});

// === APARTMENT CHANGE HANDLER ===
apartmentSelect.addEventListener("change", showApartmentDetalis);

// === 🖱️ EVENT: Click Apartment in Layout ===
document.getElementById("table-plan").addEventListener("click", function (e) {
  const cell = e.target.closest("td");
  console.log("Clicked cell:", cell.dataset);
  if (!cell || !cell.dataset.apartment) return; // Ignore empty cells or merged ones

  const building = cell.dataset.building;
  const scale = cell.dataset.scale;
  const floor = cell.dataset.floor;
  const apartment = cell.dataset.apartment;


  // Update dropdowns
  document.getElementById("scaleSelect").value = scale;
  document.getElementById("apartmentSelect").value = apartment;
console.log({ building, scale, floor, apartment });
  // Find and display apartment details
  const apt = defaultApartmentDetails.find(
    (a) =>
      a.building === building &&
      a.scale == scale &&
      a.floor == floor &&
      a.apartment == apartment
  );

  if (apt) {
    showApartmentDetalis(apt);
  } else {
    console.warn("Apartment not found for:", { building, scale, floor, apartment });
  }
});


// === FUNCTION: Show Apartment Details ===

function showApartmentDetalis () {
  const apartmentLetter = apartmentSelect.value;
        selectedBuilding = buildingSelect.value;
        selectedScale = scaleSelect.value;
        selectedFloor = floorSelect.value;
  if (!selectedBuilding || !selectedScale || !apartmentLetter) return;
  // Build the apartment ID (e.g., D23G)
  const aptId = `${selectedBuilding}${selectedScale}${selectedFloor}${apartmentLetter}`;

  // Find the apartment object from the array
  const details = defaultApartmentDetails.find((apt) => apt.id === aptId);
  // Clear previous details
  apartmentDetailsDiv.innerHTML = "";

  if (details) {
    // Create details table
    apartmentDetailsDiv.innerHTML = `
      <h4 style="text-align: center">Apartamenti<br/><strong>${aptId}</strong></h4>
      <table class="apt-details">
        <tr><th>Tipologjia</th><td>${details.Tipology || "-"}</td></tr>
        <tr><th>Siperfaqe neto</th><td>${details.totalNetArea ?? 0} m²</td></tr>
        <tr><th>Siperfaqe e përbashkët</th><td>${details.commonArea ?? 0} m²</td></tr>
        <tr style="font-size: 20px"><th>Siperfaqe totale</th><td><strong>${details.totalArea ?? 0} m²</strong></td></tr>
        <tr><th>Parkim</th><td>${details.ParkingNumber || "0"}</td></tr>
        <tr><th>Statusi</th><td>${details.statusi || "—"}</td></tr>
        <tr><th>Shënime</th><td><em>${details.shenime || "—"}</em></td></tr>
      </table>
    `;
  } else {
    apartmentDetailsDiv.innerHTML = `<p>Nuk u gjetën të dhëna për apartamentin ${apartmentLetter}.</p>`;
  }
  window.currentApartment = details; // store current selection globally
  updateApartmentValue(details);     // refresh value table
  apartmentValueTable.style.display = "block";

}

// === UTILITY FUNCTION TO RESET A SELECT ===
function resetSelect(selectEl, placeholder) {
  selectEl.value = "";
  Array.from(selectEl.options).forEach((opt) => (opt.style.display = "block"));
  selectEl.options[0].textContent = placeholder;
}

// === Show apartments on hover ===
apartmentSelect.addEventListener("mouseover", (e) => {
  const hoveredOption = e.target;
  if (hoveredOption.tagName === "OPTION" && hoveredOption.dataset.apartments) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = `Apartments: ${hoveredOption.dataset.apartments}`;
    document.body.appendChild(tooltip);

    const rect = hoveredOption.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
    tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

    hoveredOption.addEventListener(
      "mouseleave",
      () => {
        tooltip.remove();
      },
      { once: true }
    );
  }
});

// === 🧱 FLOOR DROPDOWN HANDLER ===
floorSelect.addEventListener("change", () => {
  const selectedBuilding = buildingSelect.value;
  const selectedFloor = floorSelect.value;
  showFloor(selectedBuilding, selectedFloor);
  document.getElementById("tablePlan-container").style.display = "block";

});

// === 📐 FUNCTION: Generate Table Layout (example logic) ===
function generateTableLayout(building) {
const tablePlan = document.getElementById("table-plan");
  const selectedBuilding = buildingSelect.value;
  const selectedFloor = floorSelect.value;

  tablePlan.innerHTML = "";

  // Get layout configuration for this building
  const layouts = buildingLayouts[selectedBuilding];
  if (!layouts) {
    console.warn(`No layouts defined for building ${selectedBuilding}`);
    return;
  }

  // Create a flex container to show all scales side-by-side
  const container = document.createElement("div");
  container.className = "scale-container";

  // For each scale in the building, clone and append the right layout
  layouts.forEach(({ scale, layout }) => {
    const template = document.getElementById(`layout${layout}-template`);
    if (!template) return;

    const clone = template.content.cloneNode(true);
    const table = clone.querySelector("table");
    table.dataset.scale = scale;

    // Add scale header
    const scaleHeader = document.createElement("h3");
    scaleHeader.textContent = `Shkalla ${scale}`;
    scaleHeader.style.textAlign = "center";

    const wrapper = document.createElement("div");
      wrapper.className = "table-container";

    wrapper.appendChild(scaleHeader);
    wrapper.appendChild(table);

    container.appendChild(wrapper);
  });

  // Append all tables to main table-plan
  tablePlan.appendChild(container);

  // Populate apartments for this building/floor
  populateApartments(selectedBuilding, selectedFloor);
};
// === 🏠 FUNCTION: Populate Apartments ===
function populateApartments(building, floor) {
  const tables = document.querySelectorAll("#table-plan table");
  if (!tables.length) {
    console.warn("No layout tables present to populate.");
    return;
  }

  // Filter apartments by building + floor
  const floorApartments = defaultApartmentDetails.filter(
    (apt) => apt.building === building && apt.floor == floor
  );

  // Loop through each apartment
  floorApartments.forEach((apt) => {
    // Find the table matching the correct scale
    const table = [...tables].find((t) => t.dataset.scale == apt.scale);
    if (!table) return;

    // Find the table cell whose text matches the apartment letter (A, B, C...)
    const tdList = table.querySelectorAll("td");
    const target = [...tdList].find(
      (td) => td.textContent.trim() === apt.apartment
    );

    if (!target) return;

    target.dataset.building = apt.building;
    target.dataset.scale = apt.scale;
    target.dataset.floor = apt.floor;
    target.dataset.apartment = apt.apartment;
    target.dataset.aptId = apt.id;

    // === Apply status-based color & content ===
    if (apt.statusi === "Shitur") {
      target.style.backgroundColor = "#FC8F8F";
      target.style.color = "#64242F";
      target.innerHTML = `<strong>${apt.id}</strong><br>${apt.statusi}`;
    } else {
      target.style.backgroundColor =
        apt.statusi === "Rezervuar" ? "#FFBD24" : "#e6e6e6";
      target.innerHTML = `
        <strong>${apt.id}</strong><br>
        ${apt.Tipology}<br>
        ${apt.totalArea} m²<br>
        <em>${apt.statusi}</em>
      `;
    }
  });
}

    // === 💰 FUNCTION: Update Apartment Value Table ===
function updateApartmentValue(apt) {
  if (!apt) return;

  // Get DOM elements
  const netAreaCell = document.getElementById("netAreaCell");
  const commonAreaCell = document.getElementById("commonAreaCell");
  const parkingAreaCell = document.getElementById("parkingAreaCell");

  const netPriceInput = document.getElementById("netPrice");
  const commonPriceInput = document.getElementById("commonPrice");
  const parkingPriceInput = document.getElementById("parkingPrice");

  const netTotal = document.getElementById("netTotal");
  const commonTotal = document.getElementById("commonTotal");
  const parkingTotal = document.getElementById("parkingTotal");
  const grandTotal = document.getElementById("grandTotal");

  // Fill in area values from the apartment

 // document.getElementById("apartmentInfo").textContent = apt.id;

  netAreaCell.textContent = apt.totalNetArea.toFixed(2);
  commonAreaCell.textContent = apt.commonArea.toFixed(2);
  parkingAreaCell.textContent = apt.parking ? "1" : "0";

  console.log("Updating values for apartment:", apt.id, netAreaCell.textContent);

  // Calculate totals
  const netVal = apt.totalNetArea * parseFloat(netPriceInput.value || 0);
  const commonVal = apt.commonArea * parseFloat(commonPriceInput.value || 0);
  const parkingVal = (apt.parking ? 1 : 0) * parseFloat(parkingPriceInput.value || 0);
  const totalVal = netVal + commonVal + parkingVal;

  // Display results
  netTotal.textContent = netVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
  commonTotal.textContent = commonVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
  parkingTotal.textContent = parkingVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
  grandTotal.textContent = totalVal.toLocaleString("en-US", { minimumFractionDigits: 0 });
}

// Recalculate totals automatically when any price changes
["netPrice", "commonPrice", "parkingPrice"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    if (window.currentApartment) {
      updateApartmentValue(window.currentApartment);
    }
  });
});
 // click outside to hide (keeps behavior class-based; removes inline style issues)
  document.addEventListener("click", (e) => {
    const isInsideBuilding = e.target.closest(".building");
    const isInsideTable = e.target.closest("#table-plan");
    const isInsideselectors = e.target.closest(".selector");
    const tableContainer = document.getElementById("tablePlan-container");
    const isInsideletter =  e.target.closest(".buildingLetter");
    if (!isInsideBuilding && !isInsideTable && !isInsideselectors && !isInsideletter)  {
      // hide table-plan by clearing content or hiding container

      tablePlanContainer.innerHTML = "";
      tablePlanContainer.style.display = "none";
      tableContainer.style.display = "none";
      document.querySelectorAll(".building").forEach(div => (div.style.display = "none"));

    }
  });