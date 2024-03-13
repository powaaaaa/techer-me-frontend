type Props = {};

type Event = {
  Title: string;
  EventId: string;
};

const events: Event[] = [
  {
    Title: "Event1",
    EventId: "1",
  },
  {
    Title: "Event2",
    EventId: "2",
  },
  {
    Title: "Event3",
    EventId: "3",
  },
];

export const Eventlist: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="flex flex-col items-start text-[16px] font-bold w-[100%]">
        <ul className="w-[100%]">
          {events.map((event) => (
            <a href="">
              <li>{event.Title}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};
