mod bike_ottawa;
mod parse;
mod speed_limit_only;
mod tags;
#[cfg(test)]
mod tests;
#[cfg(target_arch = "wasm32")]
mod wasm;

pub use bike_ottawa::bike_ottawa;
pub use speed_limit_only::speed_limit_only;
pub use tags::Tags;

#[derive(Debug, PartialEq, PartialOrd)]
pub enum LTS {
    NotAllowed,
    LTS1,
    LTS2,
    LTS3,
    LTS4,
}

impl LTS {
    // TODO Implement Serialize/Deserialize?
    pub fn into_json(self) -> usize {
        match self {
            LTS::NotAllowed => 0,
            LTS::LTS1 => 1,
            LTS::LTS2 => 2,
            LTS::LTS3 => 3,
            LTS::LTS4 => 4,
        }
    }

    pub fn from_json(x: usize) -> Option<Self> {
        match x {
            0 => Some(LTS::NotAllowed),
            1 => Some(LTS::LTS1),
            2 => Some(LTS::LTS2),
            3 => Some(LTS::LTS3),
            4 => Some(LTS::LTS4),
            _ => None,
        }
    }
}