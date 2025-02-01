import { socialLink } from "@/constants"
import SocialLinks from "@/components/SocialLinks"

export default function SocialMenu() {
  return (
    <ul className="flex flex-col gap-4 p-8">
      {
        socialLink.map((item, index) => (
          <SocialLinks
            key={index}
            url={item.url}
            imgURL={item.imgURL}
            label={item.label}
          />
        ))
      }
    </ul>
  )
}
