#[cfg(windows)]
extern crate winres;

#[cfg(windows)]
fn main() {
  if std::path::Path::new("Content/Icon.ico").exists() {
    let mut res = winres::WindowsResource::new();
    res.set_icon_with_id("Content/Icon.ico", "32512");
    res.compile().expect("Unable to find visual studio tools");
  } else {
    panic!("No Icon.ico found. Please add one or check the path");
  }
}

#[cfg(not(windows))]
fn main() {}
