import { shallowMount } from "@vue/test-utils";
import FeaturedCard from "../../src/components/FeaturedCard.vue";

describe("FeaturedCard.vue", () => {
  it("renders props.msg when passed", () => {
    const eventItem = {
      "offers": [
        {
          "type": "Tickets",
          "url": "https://www.bandsintown.com/t/103034189?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
          "status": "available"
        },
        {
          "type": "VIP",
          "url": "https://www.bandsintown.com/t/103034189?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe&came_from=267&custom=true&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
          "status": "available"
        }
      ],
      "venue": {
        "country": "United States",
        "city": "Las Vegas",
        "latitude": "36.17497",
        "name": "Zappos Theater at Planet Hollywood",
        "location": "Las Vegas, NV",
        "region": "NV",
        "longitude": "-115.13722"
      },
      "artist": {
        "thumb_url": "https://photos.bandsintown.com/thumb/9113907.jpeg",
        "mbid": "75a72702-a5ef-4513-bca5-c5b944903546",
        "facebook_page_url": "http://www.facebook.com/22516413022",
        "image_url": "https://photos.bandsintown.com/large/9113907.jpeg",
        "tracker_count": 2049331.0,
        "tracking": [],
        "upcoming_event_count": 25.0,
        "url": "https://www.bandsintown.com/a/193?came_from=267&app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe",
        "support_url": "",
        "name": "John Legend",
        "options": {
          "display_listen_unit": false
        },
        "links": [
          {
            "type": "website",
            "url": "http://www.johnlegend.com"
          },
          {
            "type": "facebook",
            "url": "https://www.facebook.com/johnlegend/"
          },
          {
            "type": "twitter",
            "url": "http://www.twitter.com/showmecampaign"
          },
          {
            "type": "youtube",
            "url": "http://www.youtube.com/johnlegend"
          },
          {
            "type": "other",
            "url": "http://www.myspace.com/johnlegend"
          }
        ],
        "id": "193"
      },
      "festival_datetime_display_rule": "",
      "description": "",
      "lineup": [
        "John Legend"
      ],
      "festival_start_date": "",
      "bandsintown_plus": false,
      "title": "Love doesnt cost a thing",
      "artist_id": "193",
      "url": "https://www.bandsintown.com/e/103034189?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
      "datetime": "2022-04-22T19:00:00",
      "on_sale_datetime": "",
      "id": "103034189",
      "festival_end_date": ""
    };
    const wrapper = shallowMount(FeaturedCard, {
      props: { eventItem },
    });

    const eventLink = wrapper.find(".buy-ticket");
    expect(wrapper.text()).toContain(eventItem.title);
  })
})
