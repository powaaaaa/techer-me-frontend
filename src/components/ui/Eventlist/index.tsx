type Props = {
  events: Event[];
};

type Event = {
  title: string;
  eventId: string;
};

export const Eventlist: React.FC<Props> = ({ events }) => {
  return (
    <>
      <div className="flex flex-col items-start text-[16px] font-bold w-[100%]">
        <ul className="w-[100%]">
          {events.map((event) => (
            <a href="" className="w-[100%]">
              <li className="w-[100%]">{event.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};
