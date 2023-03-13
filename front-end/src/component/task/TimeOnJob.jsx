export default function TimeOnJob () {
    return ( <>
        <div className="containerCalendar">
            <p className="open"> OPENING HOURS</p>
            <img src="images/imgHomepage/decor 1.png" alt="" />
            <div className="divCalendar">
              <div>
                {" "}
                <p>MON </p> <p className="smallTime">10:00-17:00</p>{" "}
              </div>
                <div>
                {" "}
                <p>TUE </p> <p className="smallTime">09:00-15:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>WED </p> <p className="smallTime">10:00-20:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>THU </p> <p className="smallTime">10:00-17:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>SAT </p> <p className="smallTime">10:00-17:00</p>{" "}
              </div>
              <div>
                {" "}
                <p>FRI+SUN </p> <p className="smallTime">Closed</p>{" "}
              </div>
            </div>
            <p className="loremCalendar">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Curabitur pellentesque neque eget diam.
            </p>
          </div>
    </>  );
}

 ;